import React, { Component } from "react";
import { SafeAreaView, Dimensions, View, StyleSheet, StatusBar, Text, TouchableOpacity, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import colors  from "../../config/colors"


class DetailedScreen extends Component {
    state = {
        height: Dimensions.get("screen").height,
        data: [],
    }

    componentDidMount(){
        this.prepareData();
    }
    
    prepareData = () => {
        let data = this.props.route.params.data;
        let id = this.props.route.params.id;

        for(var i = 0; i < data.length; i++){
            if(data[i]['id'] === id){
                //console.log(data[i]);
                this.setState({data : data[i]})
                break;
            }
        }
        console.log(this.state.data);
    }

  render() {
    return (
        <SafeAreaView style={{ height: this.state.height,backgroundColor: colors.bgColor }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#f5f5f3" translucent = {false}/>
            <Image style={styles.cardImage} source={this.state.data['img']} />
            <View style={{flex:1}}>
                <View style={styles.topLayout}>
                    <TouchableOpacity activeOpacity={.3} onPress={() => this.props.navigation.goBack()} style={[styles.buttonOutline,{marginBottom:4}]}>
                        <Icon name="arrow-back-sharp" size={30} color={colors.topBarIconColor}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} onPress={() => null}>
                        <Icon name="bookmark-outline" size={23} color={colors.topBarIconColor} style={[styles.buttonOutline,{marginTop:1,padding:8}]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomLayout}>

                </View>
            </View>
        </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    topLayout: {
        flex:0,
        flexDirection:"row",
        height: "8%",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:10,
        marginLeft:23,
        marginRight:23,
    },
    bottomLayout: {
        backgroundColor: colors.primary,
        height: Dimensions.get("screen").width + 50,
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: Dimensions.get("screen").width - 55,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    cardImage: {
        position:"absolute",
        width:"100%",
        height: Dimensions.get("screen").width + 30,
        resizeMode : "stretch"
    },
    buttonOutline: {
        padding:5,
        backgroundColor: colors.primary,
        elevation:1,
        borderRadius:25
    },
});

export default DetailedScreen;
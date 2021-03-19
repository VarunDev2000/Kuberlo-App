import React, { Component } from "react";
import { SafeAreaView, Dimensions, View, StyleSheet, StatusBar, Text, TouchableOpacity, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import ProductList from '../../components/ProductList';

import colors  from "../../config/colors"

class HomeScreen extends Component {
    state = {
        height: Dimensions.get("screen").height,
    }

  render() {
    return (
        <SafeAreaView style={{ height: this.state.height,backgroundColor: colors.bgColor }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {colors.bgColor} translucent = {false}/>
            <View style={{flex:1}}>
                <View style={styles.topLayout}>
                    <TouchableOpacity activeOpacity={.3} onPress={() => null} style={{marginBottom:4}}>
                        <Icon name="arrow-back-sharp" size={30} color={colors.topBarIconColor}/>
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}> Store </Text>
                    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                        <TouchableOpacity activeOpacity={.3} onPress={() => null}>
                            <Icon name="bookmark-outline" size={23} color={colors.topBarIconColor} style={{marginRight:15,marginTop:6}}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.3} onPress={() => null}>
                            <Icon name="cart-outline" size={27} color={colors.topBarIconColor} style={{marginTop:5}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.middleLayout1}>
                    <Text style={[styles.typeTitle,{opacity:1}]}> Jewelry </Text>
                    <Text style={styles.typeTitle}> Clothing </Text>
                    <Text style={styles.typeTitle}> Accessories </Text>
                </View>
                <View style={styles.middleLayout2}>
                    <TouchableOpacity activeOpacity={.3} onPress={() => null}>
                        <Image
                            style={{width: 20,height: 20, resizeMode : "stretch"}}
                            source={require('./res/icons/sort.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} onPress={() => null} style={{marginTop:3}}>
                        <Image
                            style={{width: 20,height: 20,resizeMode : "stretch"}}
                            source={require('./res/icons/filter.png')}
                        />
                    </TouchableOpacity>
                </View>

                <ProductList navigate = {this.props.navigation.navigate}/>
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
        backgroundColor: colors.bgColor,
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:10,
        marginLeft:23,
        marginRight:23,
    },
    middleLayout1: {
        flex:0,
        flexDirection:"row",
        marginTop:20,
        backgroundColor: colors.bgColor,
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:23,
        marginRight:23,
    },
    middleLayout2: {
        flex:0,
        flexDirection:"row",
        marginTop:20,
        backgroundColor: colors.bgColor,
        justifyContent:"space-between",
        marginLeft:26,
        marginRight:26,
    },
    typeTitle: {
        fontSize:19,
        fontFamily:"Poppins-SemiBold",
        color:colors.secondary,
        opacity:0.2
    },
    pageTitle: {
        fontSize:21,
        fontFamily:"Poppins-SemiBold",
        color:colors.secondary,
        justifyContent:"center",
        marginLeft:23,
        marginTop:2,
    },
});

export default HomeScreen;
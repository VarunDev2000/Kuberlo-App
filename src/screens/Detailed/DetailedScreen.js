import React, { Component } from "react";
import { SafeAreaView, Dimensions, View, StyleSheet, StatusBar, Text, TouchableOpacity, Image, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';

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
        //console.log(this.state.data);
    }

  render() {
    return (
        <SafeAreaView style={{ height: this.state.height,backgroundColor: colors.primary }}>
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
                        <View style={styles.line} />
                        <View style={{flex:1,flexWrap:"wrap",justifyContent:"space-between"}}>
                            <View style={styles.productDetailsLayout}>
                                <Text style={styles.productDetails}>{this.state.data['name']}</Text>
                                <Text style={styles.productDetails}>{this.state.data['price']}</Text>
                            </View>
                            <View>
                                <Text style={styles.subHeading}>Color</Text>
                                <View style={styles.colorsLayout}>
                                    <TouchableOpacity activeOpacity={.6} style={{marginRight:"4%"}} onPress={() => null}>
                                        <Image style={{width:38,height:38}} source={require('../../assets/res/Ellipse1.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={.6} style={{marginRight:"4%"}} onPress={() => null}>
                                        <Image style={{width:38,height:38}} source={require('../../assets/res/Ellipse2.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={.6} style={{marginRight:"4%"}} onPress={() => null}>
                                        <Image style={{width:38,height:38}} source={require('../../assets/res/Ellipse3.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={.6}style={{marginRight:"4%"}} onPress={() => null}>
                                        <Image style={{width:38,height:38}} source={require('../../assets/res/Ellipse4.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.subHeading}>Size</Text>
                                <View style={styles.colorsLayout}>
                                    <TouchableHighlight activeOpacity={.6} style={[styles.sizeOutline,{backgroundColor:"black"}]} onPress={() => null}>
                                        <Text style={[styles.sizeText,{color:"white"}]}>S</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight activeOpacity={.6} style={styles.sizeOutline} onPress={() => null}>
                                        <Text style={styles.sizeText}>M</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight activeOpacity={.6} style={styles.sizeOutline} onPress={() => null}>
                                        <Text style={styles.sizeText}>H</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={() => null}>
                                <Icon1 name="handbag" size={20} color={colors.primary} style={{marginRight:10,marginBottom:7}} />
                                <Text style={styles.buttonText}>Add to cart</Text>
                            </TouchableOpacity>
                            <View style={{height: 30}}/>
                        </View>
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
        flex:1,
        backgroundColor: colors.primary,
        paddingLeft:23,
        paddingRight:23,
        marginTop: Dimensions.get("screen").width - 55,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    colorsLayout: {
        flex:0,
        flexDirection:"row",
        marginTop:10
    },
    cardImage: {
        position:"absolute",
        width:"100%",
        height: Dimensions.get("screen").width + 30,
        resizeMode : "stretch"
    },
    line: {
        alignSelf:"center",
        backgroundColor:"#9C9C9C",
        width:"20%",
        height:5,
        marginTop:10,
        borderRadius: 20
    },
    buttonOutline: {
        padding:5,
        backgroundColor: colors.primary,
        elevation:1,
        borderRadius:25
    },
    productDetailsLayout: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        marginTop:30,
      },
      productDetails: {
        fontSize:19,
        fontFamily:"Poppins-SemiBold",
        color:colors.secondary,
        justifyContent:"center",
      },
      subHeading: {
        fontSize:15,
        fontFamily:"Poppins-SemiBold",
        color:colors.secondary,
        justifyContent:"flex-start",
      },
      sizeOutline: {
        backgroundColor:"#F7F7F7",
        width:39,
        height:39,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginRight:"4%",
      },
      sizeText: {
        fontSize:15,
        fontFamily:"Poppins-SemiBold",
        color:colors.secondary,
        justifyContent:"flex-start",
      },
      button: {
        width:"100%",
        height:"15%",
        backgroundColor:colors.secondary,
        alignSelf:"center",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
      },
      buttonText: {
        fontSize:15,
        fontFamily:"Poppins-SemiBold",
        color:colors.primary,
      },
});

export default DetailedScreen;
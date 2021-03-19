import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native'; 
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/Navigation";

import colors from './src/config/colors';

class App extends Component{
  state={  
    isVisible : true,  
   }  
   
  hideSplashScreen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  

 componentDidMount(){  
   var that = this;  
   setTimeout(function(){  
     that.hideSplashScreen();  
   }, 1500);  
  }  

  SplashScreen = (  
    <View style={{flex:1,backgroundColor:"white",alignItems:"center"}}>  
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {colors.bgColor} translucent = {false}/>
     <Text style={styles.mainText}>Kuberlo</Text>
    </View> )  

  render (){
    if(this.state.isVisible){
      return this.SplashScreen;
    }

    return(
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )  
}
};

const styles = StyleSheet.create({
  mainText: {
    fontSize:75,
    paddingTop: Dimensions.get("screen").height / 2.5,
    fontFamily:"PoiretOne-Regular",
    color:colors.splashScreenTextColor,
  }
});


export default App;
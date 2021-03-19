import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/Navigation";


class App extends Component{
  render (){
    return(
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )  
}
};

export default App;
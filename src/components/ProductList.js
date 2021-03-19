import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CardView from 'react-native-cardview';

import colors from "../config/colors";

const DATA = [
    {
        id: 1,
        name: 'Blue Moon Earings',
        price: '$14.99',
        stock: true,
        img: require('../assets/res/Product1.png'),
    },
    {
        id: 2,
        name: 'Blue Moon Earings',
        price: '$14.99',
        stock: false,
        img: require('../assets/res/Product2.png'),
    },
  
];
  

class ProductList extends Component {

render(){
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      style={{ width: "100%",alignSelf:"center", marginTop:20}}
      data={DATA}
      ListFooterComponent={<View style={{height: 130}}/>}
      renderItem={({ item }) => (

        <View>
            <TouchableOpacity activeOpacity={0.9} onPress={() => item.stock === true ? (this.props.navigate('DetailedScreen', {data: DATA,id: item.id})) : (null)}>
                <CardView
                style={styles.cardLayout}
                cardElevation={3}
                cardMaxElevation={3}
                cornerRadius={13}>
                  <Image style={styles.cardImage} source={item.img} />
                  {
                    item.stock === false ? (
                      <Image style={styles.outofstockImage} source={require('../assets/res/outofstock.png')} />
                    ) : (null)
                  }
                </CardView>
            </TouchableOpacity>
            <View style={styles.productDetailsLayout}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </View>

      )}
    />
  );
}
};

const styles = StyleSheet.create({
  cardLayout: {
    width: 0.88 * Dimensions.get("screen").width,
    height: 0.88 * Dimensions.get("screen").width,
    alignSelf:"center",
    borderRadius: 7,
    margin: 5,
    marginTop:10,
    marginBottom: 0,
    elevation: 20,
  },
  cardImage: {
    width:"100%",
    height:"100%",
    resizeMode : "stretch"
  },
  outofstockImage: {
    width:"28%",
    height:"6%",
    marginTop:25,
    resizeMode : "stretch",
    position:"absolute",
  },
  productDetailsLayout: {
    width:"87%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignSelf:"center",
    marginBottom:18,
    marginTop:5
  },
  productName: {
    fontSize:19,
    fontFamily:"Poppins-Regular",
    color:colors.secondary,
    justifyContent:"center",
    marginTop:2,
  },
  productPrice: {
    fontSize:19,
    fontFamily:"Poppins-SemiBold",
    color:colors.secondary,
    justifyContent:"center",
    marginTop:2,
  },
});

export default ProductList;
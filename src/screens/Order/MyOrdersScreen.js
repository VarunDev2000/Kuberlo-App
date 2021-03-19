import React, { Component } from "react";
import { SafeAreaView, Dimensions, View, StyleSheet, StatusBar, Text} from "react-native";
import colors  from "../../config/colors";


class MyOrdersScreen extends Component {
    state = {
        height: Dimensions.get("screen").height,
    }

  render() {
    return (
        <SafeAreaView style={{ height: this.state.height,backgroundColor: colors.bgColor }}>
        <StatusBar backgroundColor={colors.primary} />
            <View style={{flex:1}}>
                <Text>MyOrdersScreen</Text>
            </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
});

export default MyOrdersScreen;
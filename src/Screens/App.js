import React, { Component } from "react";
import { View, Text,StatusBar } from "react-native";
import { AppNavigator } from "../Navigation"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default  class App extends Component {
  componentDidMount = async () => {
    console.log("Eneter");
  }
  render() {
    return (
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#12AE19'
      }}>
      <AppNavigator />
    </SafeAreaView>
    );
  }
}

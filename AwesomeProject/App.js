/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, Image} from 'react-native';

import Button from 'react-native-button';


const RNMyFancyLibraryModule = NativeModules.RNMyFancyLibraryModule;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  componentWillMount() {
    this.setState({
      img:""
    });
  }
  takeScreenShot = () => {
    RNMyFancyLibraryModule.takeScreenShot(this.displayResult);
  }

  displayResult = (result) => {
    this.setState({img: result});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={this.takeScreenShot}>Take a Screenshot</Button>
        <Text>ScreenShot Preview:</Text>
        <Image style={styles.image} source={{uri: `data:image/gif;base64,${this.state.img}`}} />  
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 320,
    width: 180,
    borderWidth: 5,
    borderColor: 0x00
    }
});

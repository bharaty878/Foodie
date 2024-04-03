
import {  ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './screens/Navigation'

const App = () => {
  return (
    <ImageBackground source={require('./images/burger2.jpg')} style={{flex:1}}>
    <View style={{flex:1}}>
      <Navigation/>
    </View>
    </ImageBackground>
  )
}

export default App

const styles = StyleSheet.create({})
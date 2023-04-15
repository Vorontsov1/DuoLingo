import React from 'react';
import {  Text, View, Image, TextInput } from 'react-native';
import styles from './App.styles';




const App = () => {
const status = "ok"
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass'?</Text>

      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            style={styles.optionImage}
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
            resizeMode="contain"
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
 
      </View>
    </View>
  );
}
export default App;



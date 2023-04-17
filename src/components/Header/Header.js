import React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';
import ProgressBar from '../ProgressBar/ProgressBar';
import heart from '../../../assets/images/heart.png';

const Header = ({progress, lives}) => {
  return (
    <View style={styles.root}>
          <ProgressBar progress={progress} />
          <Image
              resizeMode='contain'
              style={styles.icon}
              source={heart} />
          <Text style={styles.lives}>{lives}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
        flexDirection: "row",
      alignItems: "center",
  },
  icon: {
    height: 30,
      width: 30,
    marginHorizontal: 10,
  },
  lives: {
    color: "red",
      fontWeight: "bold",
    fontSize: 18,
  },
});
export default Header;

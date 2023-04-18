import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const WordOption = ({text, onPress,  isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgrey" : "white" },
      ]}
    >
      <Text style={[styles.text, { color: isSelected ? "grey" : "black" }]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: 'grey',
        borderRadius: 5,

        padding: 10,
        paddingHorizontal: 15,
        margin: 10,
  },
  text: {},
});


export default WordOption;

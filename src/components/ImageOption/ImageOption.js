import React from "react";
import { View, Text, Image } from "react-native";
 import styles from "./styles";

const ImageOption = ({image, text}) => {
  return (
    <View style={styles.optionContainer}>
      <Image style={styles.optionImage} src={image} resizeMode="contain" />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default ImageOption;

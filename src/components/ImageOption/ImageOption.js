import React from "react";
import { View, Text, Image } from "react-native";
 import styles from "./styles";

const ImageOption = () => {
  return (
    <View style={styles.optionContainer}>
      <Image
        style={styles.optionImage}
        src={
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"
        }
        resizeMode="contain"
      />
      <Text style={styles.optionText}>Glass</Text>
    </View>
  );
};
export default ImageOption;

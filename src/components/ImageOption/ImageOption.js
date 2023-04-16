import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
 import styles from "./styles";

const ImageOption = ({image, text}) => {
  return (
    <View style={styles.optionContainer}>
      <Image style={styles.optionImage} src={image} resizeMode="contain" />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

ImageOption.propTypes = {
image: PropTypes.string.isRequired,
text: PropTypes.string.isRequired,
};

ImageOption.defaultProps = {
    text: "Default",
};

export default ImageOption;

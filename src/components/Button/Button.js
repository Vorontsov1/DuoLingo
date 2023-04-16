import React from "react";
import PropTypes from 'prop-types';
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const Button = ({text, onPress}) => {
  return (
      <Pressable
          onPress={onPress}
          style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
};

Button.defaultProps = {
    onPress: () => {},
};

export default Button;

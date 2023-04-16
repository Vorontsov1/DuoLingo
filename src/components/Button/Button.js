import React from "react";
import PropTypes from 'prop-types';
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const Button = ({text, onPress, disabled}) => {
  return (
      <Pressable
          onPress={onPress}
          style={[styles.container, disabled ? styles.disabledContainer : {}]}
      disabled={disabled}
      >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onPress: () => { },
    disabled: false,
};

export default Button;

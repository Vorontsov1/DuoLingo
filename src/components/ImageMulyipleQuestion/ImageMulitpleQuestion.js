import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ImageOption from "../ImageOption/ImageOption";
import Button from "../Button";
import styles from "./styles";

const ImageMulitpleQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected.correct) {
      onCorrect();

      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
      
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" disabled={!selected} onPress={onButtonPress} />
    </>
  );
};

ImageMulitpleQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMulitpleQuestion;

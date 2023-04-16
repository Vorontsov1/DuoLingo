import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/ImageOption";
import Button from "./src/components/Button";
import question from "./assets/data/imageMulatipleChoiceQuestions";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= question.length) {
      Alert.alert("You won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(question[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onButtonPress = () => {
    if (selected.correct) {
      // Alert.alert("Correct!");
      // move to next question

      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // reset selected
      setSelected(null);
    } else {
      Alert.alert("Wrooong!");
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {/* {option.options} */}
        {currentQuestion.options.map((option) => (
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
    </View>
  );
};
export default App;

import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/ImageOption";
import Button from "./src/components/Button";
// import question from "./assets/data/imageMulatipleChoiceQuestions";
// import question from "./assets/data/openEndedQuestions";
import question from './assets/data/allQuestions';
import ImageMulitpleQuestion from "./src/components/ImageMulyipleQuestion/ImageMulitpleQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuension/OpenEndedQuestion";



const App = () => {
  
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

  const onCorrect = () => {     
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const onWrong = () => {
    Alert.alert("Wrooong!");
   }


  return (
    <View style={styles.root}>
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMulitpleQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
};
export default App;

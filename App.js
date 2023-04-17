import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import styles from "./App.styles";
import Header from "./src/components/Header/Header";
import ImageMultipleQuestion from "./src/components/ImageMultipleQuestion/ImageMultipleQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";

import question from "./assets/data/allQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FillinTheBlank from "./src/components/FillinTheBlank/FillinTheBlank";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= question.length) {
      Alert.alert("You won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(question[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {
    Alert.alert("Wrooong!");
    if (lives < 1) {
      Alert.alert("Game over!", "Try again", [
        {
          text: "Try again",
          onPress: restart,
          style: "default",
        },
      ]);
    } else {
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(0);
    // setCurrentQuestionIndex(parseInt(currentQuestionIndex)); 
    }
    setHasLoaded(true);
  };

  if (!hasLoaded) {
    <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / question.length} lives={lives} />

      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillinTheBlank
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};
export default App;

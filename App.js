import React,  { useState } from 'react';
import {  Text, View, Alert } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import Button from './src/components/Button';
import question from './assets/data/imageMulatipleChoiceQuestions';

 
const App = () => {
  const [selected, setSelected] = useState(null);
  const[selectedQuestion, setSelectedQuestion] = useState(question[0]);
  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert('Correct!');
    } else {
      Alert.alert('Wrong!');
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{selectedQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {/* {option.options} */}
        {selectedQuestion.options.map((option) => (
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
}
export default App;



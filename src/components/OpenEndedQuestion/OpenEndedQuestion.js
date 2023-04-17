import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from './styles';
import Button from '../Button';
import mascot from '../../../assets/images/mascot.png';



const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput('');
  };


  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          // style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Translate this sentence</Text>
          <View style={styles.row}>
            {/* image */}
            <Image source={mascot} style={styles.mascot} resizeMode="contain" />
            <View style={styles.sentenceContainer}>
              <Text style={styles.sentence}>{question.text}</Text>
            </View>
            {/* sentence container */}
          </View>
          <TextInput
            value={input}
            onChangeText={setInput}
            style={styles.textInput}
            placeholder="Type in English"
            multiline={true}
          />
          <Button text="Check" disabled={!input} onPress={onButtonPress} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}



OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired,
};

export default OpenEndedQuestion;

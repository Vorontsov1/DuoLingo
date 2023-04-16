import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import mascot from '../../../assets/images/mascot.png';



const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    console.warn(input);
  };
  return (
    <>
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

      <Button
        text="Check"
        disabled={false}
        onPress={onButtonPress}
      />
    </>
  );
}



export default OpenEndedQuestion;

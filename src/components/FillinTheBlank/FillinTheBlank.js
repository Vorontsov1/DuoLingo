import React, {useState} from 'react';
import { View, Text } from "react-native";
import Button from '../Button/Button';
import styles from './styles';
import WordOption from '../WordOption/WordOption';



const FillinTheBlank = ({ question, onCorrect, onWrong }) => {
    const [selected, setSelected] = React.useState(null);

    const onButtonPress = () => {}

  return (
    <>
     <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        <Text>{question.text}</Text>
        <View style={styles.blank}></View>
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
            <WordOption text={option}
                isSelected={selected === option}
                onPress={() => setSelected(option)}
                key={option}

     />
        ))}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </>
  );
}

export default FillinTheBlank;

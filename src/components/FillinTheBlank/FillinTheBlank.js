import React, {useState} from 'react';
import { View, Text } from "react-native";
import Button from '../Button/Button';
import styles from './styles';
import WordOption from '../WordOption/WordOption';



const FillinTheBlank = ({ question, onCorrect, onWrong }) => {
    const [selected, setSelected] = React.useState(null);

    const onButtonPress = () => {
        if (selected === question.answer) {
            onCorrect();
           
        } else {
            onWrong();
        }
           setSelected();  
    }

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
              <Text style={styles.text}>{question.text}</Text>
        <View style={styles.blank}>
          {selected && (
            <WordOption
              text={selected}
              onPress={() => setSelected(null)}
              key={selected}
            />
          )}
        </View>
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <WordOption
            text={option}
            isSelected={selected === option}
            onPress={() => setSelected(option)}
            key={index}
          />
        ))}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
}

export default FillinTheBlank;

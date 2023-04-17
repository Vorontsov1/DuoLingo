import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Button/Button";
import styles from "./styles";
import WordOption from "../WordOption/WordOption";

const FillinTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const onButtonPress = () => { 
    // console.log("selected:", selected);
    // console.log("question.answer:", question.answer);
    // console.log("comparison result:", selected === question.answer);

    // if (selected === question.answer) {
    //   onCorrect();
    // } else {
    //   onWrong();
    // }
    // setSelected(null);
  };

    const addOptionsToSelected = (option) => {
setSelectedOptions([...selectedOptions, option]);
    }
    
  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        {question.parts.map((part) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank}>
                {/* {selected && (
                  <WordOption
                    text={selected}
                    onPress={() => addOptionsToSelected(null)}
                    key={selected}
                  />
                )} */}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <WordOption
            text={option}
            isSelected={selectedOptions.includes(option)}
            onPress={() => addOptionsToSelected(option)}
            key={index}
          />
        ))}
      </View>

      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={!selectedOptions.length}
      />
    </>
  );
};

export default FillinTheBlank;

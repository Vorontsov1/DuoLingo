import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "stretch",
  },

  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
    marginBottom: 0,
  },

  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },

  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lighrgrey",
    borderRadius: 15,
    padding: 10,
  },

  sentence: {
    fontSize: 16,
  },

  textInput: {
    backgroundColor: "lightgrey",
    flex: 1,
    borderWidth: 1,
    borderColor: "#B7B3A1",
    borderRadius: 10,
    padding: 10,
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  // keyboardAvoidingView: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "ios" ? 20 : 0,
  // },
});

export default styles;
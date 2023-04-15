import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  optionContainer: {
    // border
    borderWidth: 3,
    borderBottomWidth: 4,
    borderColor: "gray",
    borderRadius: 15,
    // size
    width: "48%",
      height: "48%",
    // spasing
      padding: 10,
    alignItems: "center",
  },
    optionImage: {
    width: '100%',
    flex: 1,
  },
  optionText: {},
});

export default styles;

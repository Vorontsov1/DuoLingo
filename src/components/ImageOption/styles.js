import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  selectedText: {
    fontSize: 20,
    color: "#40BEF7",
    fontWeight: "bold",
  },
});

export default styles;

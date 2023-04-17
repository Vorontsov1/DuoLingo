import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    marginHorizontal: 10,
    height: 70,
    justifyContent: "center",
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 20,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
});

export default styles;

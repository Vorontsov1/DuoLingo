import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    // borders
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
});
export default styles;
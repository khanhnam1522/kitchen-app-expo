import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

const PrimaryButton = ({ title }) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#70B56E",
    borderRadius: 17,
    height: 50,
    width: width * 0.9,
    margin: 10,
  },
  text: { fontSize: 18, fontFamily: "Roboto", color: "white" },
});

export default PrimaryButton;

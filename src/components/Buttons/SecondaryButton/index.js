import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SecondaryButton = ({ title }) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FFFFE1",
    borderRadius: 17,
    height: 50,
    width: width * 0.9,
    margin: 10,
  },
  text: { fontSize: 18, fontFamily: "Roboto", color: "#70B56E" },
});

export default SecondaryButton;

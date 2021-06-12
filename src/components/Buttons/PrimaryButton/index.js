import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text } from "components";
import colors from "colors";

const { width } = Dimensions.get("window");

const PrimaryButton = ({ title, ...otherProps }) => (
  <TouchableOpacity style={styles.container} {...otherProps}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 17,
    height: 50,
    width: width * 0.9,
    margin: 10,
  },
  text: { fontSize: 18, color: "white" },
});

export default PrimaryButton;

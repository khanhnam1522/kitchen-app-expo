import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => (
  <Text style={styles.text} {...props}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: { fontSize: 16, fontFamily: "Roboto" },
});

export default DefaultText;

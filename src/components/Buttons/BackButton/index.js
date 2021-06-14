import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "components";
import colors from "colors";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Ionicons name="md-arrow-back" size={20} color="white" />
    </TouchableOpacity>
    <Text style={styles.text}> Back </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors.primary,
    width: 29,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: colors.primary,
    fontSize: 15,
    marginLeft: 5,
  },
});

export default BackButton;

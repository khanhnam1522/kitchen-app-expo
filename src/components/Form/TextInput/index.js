import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TextInputForm({ title, ...otherProps }) {
  return (
    <View style={{ width: "100%", margin: 10 }}>
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: "#70B56E" }}>{title}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{
            color: "#70B56E",
            fontSize: 18,
            fontFamily: "Roboto",
          }}
          {...otherProps}
        />
        <View style={{ alignSelf: "center" }}>
          <Ionicons
            name="md-checkmark-circle"
            size={24}
            color="#70B56E"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    borderRadius: 17,
    borderColor: "#70B56E",
    borderWidth: 2,
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInputForm;

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "components";
import colors from "colors";

function TextInputForm({ title, ...otherProps }) {
  return (
    <View style={{ width: "100%", margin: 10 }}>
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: colors.primary }}>{title}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{
            color: colors.primary,
            fontSize: 18,
            fontFamily: "Roboto",
          }}
          {...otherProps}
        />
        <View style={{ alignSelf: "center" }}>
          <Ionicons
            name="md-checkmark-circle"
            size={24}
            color={colors.primary}
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
    borderColor: colors.primary,
    borderWidth: 2,
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInputForm;

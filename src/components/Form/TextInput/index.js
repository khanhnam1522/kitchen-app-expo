import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import { Text } from "components";
import colors from "colors";

const { width } = Dimensions.get("window");

function TextInputForm({ title, name, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <View style={{ width: "100%", margin: 10 }}>
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: colors.primary }}>{title}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
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
  textInput: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: "Roboto",
    width: width * 0.75,
  },
});

export default TextInputForm;

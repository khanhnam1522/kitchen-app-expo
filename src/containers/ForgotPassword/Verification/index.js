import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Text, FormikForm } from "components";
import { connect } from "react-redux";
import * as yup from "yup";
import colors from "colors";
import { TextInputForm, BackButton, SubmitFormButton } from "components";

// const verificationCodeSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),
// });

const Verification = ({ sendVerificationCode, auth, navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFE1" }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.iconContainer}>
            <BackButton onPress={() => navigation.pop()} />
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <FormikForm
                // validationSchema={verificationCodeSchema}
                initialValues={{ verificationCode: "" }}
                onSubmit={(data) => {
                  console.log("***data", data);
                }}
              >
                <TextInputForm
                  title="Verification Code"
                  name="verificationCode"
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={{ margin: 10, alignSelf: "center" }}
                  onPress={() => navigation.navigate("EmailSubmission")}
                >
                  <Text style={{ color: colors.primary }}>Resend code</Text>
                </TouchableOpacity>
                <Text style={styles.errorText}>{auth.errorMessage}</Text>
                <View style={{ marginTop: 30 }}>
                  <SubmitFormButton title="Submit Verification Code" />
                </View>
              </FormikForm>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  iconContainer: {
    width: "90%",
    justifyContent: "center",
    flex: 1,
    alignSelf: "center",
    marginVertical: 30,
  },
  errorText: {
    color: colors.error,
  },
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
  sendVerificationCode: (values) => auth.sendVerificationCode(values),
});

export default connect(mapState, mapDispatch)(Verification);

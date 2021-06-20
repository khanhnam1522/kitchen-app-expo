import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from "react-native";
import { Text, FormikForm } from "components";
import * as yup from "yup";
import colors from "colors";
import { TextInputForm, BackButton, SubmitFormButton } from "components";

const emailSubmissionSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
});

const EmailSubmission = ({ auth, register, navigation }) => {
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
                validationSchema={emailSubmissionSchema}
                initialValues={{ email: "" }}
                onSubmit={(data) => {
                  console.log("***data", data);
                }}
              >
                <TextInputForm
                  title="Email"
                  name="email"
                  keyboardType="email-address"
                />
                <View style={{ marginTop: 30 }}>
                  <SubmitFormButton title="Submit Email" />
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
});

export default EmailSubmission;

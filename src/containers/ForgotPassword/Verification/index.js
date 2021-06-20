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

const verificationCodeSchema = yup.object().shape({
  verificationCode: yup.string().required("Verification code is required"),
});

const Verification = ({
  sendVerificationCode,
  verifyCode,
  auth,
  navigation,
  route,
}) => {
  const { email } = route.params;
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
                validationSchema={verificationCodeSchema}
                initialValues={{ verificationCode: "" }}
                onSubmit={async (data) => {
                  await verifyCode({
                    verificationCode: parseInt(data.verificationCode),
                    email: email,
                  });
                }}
              >
                <TextInputForm
                  title="Verification Code"
                  name="verificationCode"
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={{ margin: 10, alignSelf: "center" }}
                  onPress={async () => {
                    if (email) {
                      await sendVerificationCode({ email: email });
                    } else {
                      console.log(
                        "Error getting email to resend verification code"
                      );
                    }
                  }}
                >
                  <Text style={{ color: colors.primary }}>Resend code</Text>
                </TouchableOpacity>
                <Text style={styles.errorText}>
                  {auth.errorMessage?.verifyCode}
                </Text>
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
  verifyCode: (values) => auth.verifyCode(values),
});

export default connect(mapState, mapDispatch)(Verification);

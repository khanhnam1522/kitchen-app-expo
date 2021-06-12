import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Text, FormikForm } from "components";
import * as yup from "yup";
import colors from "colors";
import { connect } from "react-redux";
import { TextInputForm, SecondaryButton, SubmitFormButton } from "components";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const Login = ({ login, auth, register }) => {
  // const { setFieldTouched, setFieldValue, errors, touched, values } =
  // useFormikContext();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FormikForm
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (data) => {
            await login(data);
          }}
        >
          <TextInputForm
            title="Email"
            name="email"
            keyboardType="email-address"
          />
          <TextInputForm title="Password" name="password" secureTextEntry />

          <TouchableOpacity style={{ margin: 10 }}>
            <Text style={{ color: colors.primary }}>Forgot your password?</Text>
          </TouchableOpacity>
          {/* <Button
                onPress={handleSubmit}
                title={isLogin ? "LOGIN" : "REGISTER"}
                disabled={!isValid || values.email === ""}
              /> */}
          <SubmitFormButton title="Login" />
          <SecondaryButton title="Create A New Account" />
          <Text style={styles.errorText}>{auth.errorMessage}</Text>
        </FormikForm>
        {/* <Button
          onPress={() => setIsLogin(!isLogin)}
          title={isLogin ? "REGISTER" : "LOGIN"}
        /> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
  login: (values) => auth.login(values),
  register: (values) => auth.register(values),
});

export default connect(mapState, mapDispatch)(Login);

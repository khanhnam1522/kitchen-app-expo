import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { TextInputForm, PrimaryButton, SecondaryButton } from "components";

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
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (data) => {
            isLogin ? await login(data) : await register(data);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              {/* {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )} */}
              {/* {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )} */}
              <TextInputForm
                title="Email"
                name="email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <TextInputForm
                title="Password"
                name="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />

              <TouchableOpacity style={{ margin: 10 }}>
                <Text style={{ color: "#70B56E" }}>Forgot your password?</Text>
              </TouchableOpacity>
              {/* <Button
                onPress={handleSubmit}
                title={isLogin ? "LOGIN" : "REGISTER"}
                disabled={!isValid || values.email === ""}
              /> */}
              <PrimaryButton title="Login" />
              <SecondaryButton title="Create A New Account" />
              <Text style={styles.errorText}>{auth.errorMessage}</Text>
            </>
          )}
        </Formik>
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
    flex: 1,
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

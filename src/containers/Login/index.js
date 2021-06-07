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
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";

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
        <View style={styles.loginContainer}>
          <Text>{isLogin ? "Login Screen" : "Register Screen"}</Text>

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
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <Button
                  onPress={handleSubmit}
                  title={isLogin ? "LOGIN" : "REGISTER"}
                  disabled={!isValid || values.email === ""}
                />
                <Text style={styles.errorText}>{auth.errorMessage}</Text>
              </>
            )}
          </Formik>
          <Button
            onPress={() => setIsLogin(!isLogin)}
            title={isLogin ? "REGISTER" : "LOGIN"}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
  },
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
  login: (values) => auth.login(values),
  register: (values) => auth.register(values),
});

export default connect(mapState, mapDispatch)(Login);

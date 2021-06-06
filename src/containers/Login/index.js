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
import client from "apolloClient";
import { LOGIN } from "apolloMutations";

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

const Login = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>Login Screen</Text>

          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async ({ email, password }) => {
              const response = await client.mutate({
                mutation: LOGIN,
                variables: {
                  data: {
                    email,
                    password,
                  },
                },
              });
              console.log("***response", response);
              if (response?.data?.login?.accessToken) {
                //TODO : add ramda library
                navigation.navigate("MainScreen");
              } else {
                const newErrorMessage =
                  response?.data?.login?.errors[0].message || "";
                setErrorMessage(newErrorMessage);
              }
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
                  title="LOGIN"
                  disabled={!isValid || values.email === ""}
                />
                <Text style={styles.errorText}>{errorMessage}</Text>
              </>
            )}
          </Formik>
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

export default Login;

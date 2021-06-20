import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Text, FormikForm, Separator } from "components";
import * as yup from "yup";
import colors from "colors";
import { connect } from "react-redux";
import { TextInputForm, SecondaryButton, SubmitFormButton } from "components";
import { LinearGradient } from "expo-linear-gradient";

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

const Login = ({ login, auth, navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#FFFDCB", "#ADDFAC"]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View>
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
                  <TextInputForm
                    title="Password"
                    name="password"
                    secureTextEntry
                  />
                  <TouchableOpacity
                    style={{ margin: 10, alignSelf: "center" }}
                    onPress={() => navigation.navigate("EmailSubmission")}
                  >
                    <Text style={{ color: colors.primary }}>
                      Forgot your password?
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.errorText}>
                    {auth.errorMessage.login}
                  </Text>
                  <SubmitFormButton title="Login" />
                </FormikForm>
              </View>

              <View style={{ marginBottom: 30 }}>
                <Separator title="OR" />
                <SecondaryButton
                  title="Create A New Account"
                  onPress={() => navigation.navigate("Register")}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
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
  errorText: {
    color: colors.error,
  },
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
  login: (values) => auth.login(values),
  register: (values) => auth.register(values),
});

export default connect(mapState, mapDispatch)(Login);

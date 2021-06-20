import R from "ramda";
import { setItem, deleteItem } from "secureStore";
import { LOGIN, REGISTER, SEND_VERIFICATION_CODE } from "apolloMutations";
import client from "apolloClient";
import * as navigation from "navigation";

const defaultState = {
  accessToken: null,
  errorMessage: "",
};

export default {
  state: defaultState,
  reducers: {
    setToken(state, payload) {
      return { accessToken: payload };
    },
    setErrorMessage(state, payload) {
      return { errorMessage: payload };
    },
    reset() {
      return defaultState;
    },
  },
  effects: (dispatch) => ({
    async login({ email, password }) {
      const response = await client.mutate({
        mutation: LOGIN,
        variables: {
          data: {
            email,
            password,
          },
        },
      });
      const accessToken = R.path(["data", "login", "accessToken"])(response);
      console.log("Login: ", accessToken);
      if (accessToken) {
        this.setToken(accessToken);
        await setItem("accessToken", accessToken);
        navigation.reset("MainScreen");
      } else {
        const errorMessage = R.path(["data", "login", "errors", "message"])(
          response
        );
        this.setErrorMessage(errorMessage);
      }
    },
    async logout() {
      this.setToken(null);
      await deleteItem("accessToken");
      navigation.reset("Login");
    },
    async register({ email, password, username }) {
      const response = await client.mutate({
        mutation: REGISTER,
        variables: {
          data: {
            email,
            password,
            username,
          },
        },
      });
      const accessToken = R.path(["data", "register", "accessToken"])(response);
      console.log("Login: ", accessToken);
      if (accessToken) {
        this.setToken(accessToken);
        await setItem("accessToken", accessToken);
        navigation.reset("MainScreen");
      } else {
        const errorMessage = R.path(["data", "register", "errors", "message"])(
          response
        );
        this.setErrorMessage(errorMessage);
      }
    },
    async sendVerificationCode({ email }) {
      const response = await client.mutate({
        mutation: SEND_VERIFICATION_CODE,
        variables: {
          data: {
            email,
          },
        },
      });
      const sendEmailSuccess = R.path(["data", "sendVerificationCode"])(
        response
      );
      if (sendEmailSuccess) {
        console.log("Email sent to ", email);
        navigation.navigate("Verification");
      } else {
        this.setErrorMessage("Something went wrong. Please try again later");
      }
    },
  }),
};

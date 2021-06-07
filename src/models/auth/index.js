import R from "ramda";
import { LOGIN } from "apolloMutations";
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
        navigation.navigate("MainScreen");
      } else {
        const errorMessage = R.path(["data", "login", "errors", "message"])(
          response
        );
        this.setErrorMessage(errorMessage);
      }
    },
  }),
};

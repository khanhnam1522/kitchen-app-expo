import { init } from "@rematch/core";

import network from "./network";
import auth from "./auth";
import plugins from "../plugins";

const store = init({
  models: {
    network,
    auth,
  },
  plugins,
  redux: {
    devtoolOptions: {
      maxAge: 200,
    },
  },
});

export default store;

import { init } from "@rematch/core";

import network from "./network";
import plugins from "../plugins";

const store = init({
  models: {
    network,
  },
  plugins,
  redux: {
    devtoolOptions: {
      maxAge: 200,
    },
  },
});

export default store;

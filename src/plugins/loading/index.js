import createLoading from "@rematch/loading";

export default createLoading({
  whitelist: ["auth/login", "auth/logout"],
});

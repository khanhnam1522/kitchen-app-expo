import { getItem } from "secureStore";
import { setContext } from "apollo-link-context";

export const authMiddleware = setContext(async (operation) => {
  const accessToken = await getItem("accessToken");
  const res = {
    headers: {
      authorization: "bearer " + (accessToken || null),
    },
  };
  return res;
});

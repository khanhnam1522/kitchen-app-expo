import NetInfo from "@react-native-community/netinfo";

const defaultStatus = {
  isConnected: true,
  wifi: true,
  networkActivity: false,
};
export default {
  state: defaultStatus,
  reducers: {
    set(state, payload = {}) {
      const { type } = payload;
      if (type) {
        return {
          ...state,
          wifi: type === "wifi",
          isConnected: type !== "none",
        };
      }
      return { ...state, ...payload };
    },
  },
  effects: {
    async reset() {
      const { isConnected, type } = await NetInfo.fetch();
      return {
        isConnected,
        wifi: type === "wifi",
        networkActivity: false,
      };
    },
  },
};

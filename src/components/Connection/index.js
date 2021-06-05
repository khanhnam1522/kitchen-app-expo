import * as React from "react";
import { View } from "react-native";
import NetInfo from "@react-native-community/netinfo";

let listener = null;

class Connection extends React.Component {
  componentDidMount() {
    listener = NetInfo.addEventListener(this.updateConnection);
  }
  componentWillUnmount() {
    listener();
  }
  updateConnection = ({ type }) => {
    if (!this.props.network) return null;
    this.props.network.set({ type });
  };
  render() {
    return <View style={{ flex: 1 }}>{this.props.children}</View>;
  }
}

export default Connection;

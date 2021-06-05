import { LogBox } from "react-native";

// must be required to allow I18n to finish loading first

// ? ignore specific LogBox warnings
const IGNORED_WARNINGS = [
  "Require cycle:",
  "Warning: componentWillMount has been renamed",
  "Warning: componentWillReceiveProps has been renamed",
  "Warning: componentWillUpdate has been renamed",
  "Warning: Invalid argument supplied to oneOfType", // ? https://github.com/stephy/CalendarPicker/issues/253
];
const IGNORED_ERRORS = ["currentlyFocusedField is deprecated"];
const oldConsoleWarn = console.warn;
const oldConsoleError = console.error;
const oldConsoleLog = console.log;

if (__DEV__) {
  console.log = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].startsWith('Running "main" with')
    ) {
      return;
    }
    return oldConsoleLog.apply(console, args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      IGNORED_WARNINGS.some((ignoredWarning) =>
        args[0].startsWith(ignoredWarning)
      )
    ) {
      return;
    }
    return oldConsoleWarn.apply(console, args);
  };

  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      IGNORED_ERRORS.some((ignoredError) => args[0].startsWith(ignoredError))
    ) {
      return;
    }
    return oldConsoleError.apply(console, args);
  };
  import("./src/services/networkAnalyzer").then((analyser) =>
    analyser.default()
  );
}

LogBox.ignoreLogs(IGNORED_WARNINGS);

export default require("./src").default;

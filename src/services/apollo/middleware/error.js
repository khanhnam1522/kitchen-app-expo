import { onError } from "apollo-link-error";
import NavigationService from "navigation";

const handleNetworkError = (networkError, operation) => {
  const { status } = networkError.response || {};
  const { variables, operationName } = operation;
  const error = `[Network Error]: [${status}]-${networkError}, in ${operationName} with variables: ${JSON.stringify(
    variables
  )}`;
  console.log(error);
};

export const errorMiddleware = onError(
  ({ operation, graphQLErrors, networkError }) => {
    const variables = JSON.stringify(operation.variables);
    console.log("--[GraphqlErrors]--");
    console.log("Operation:", operation);
    console.log("Errors:", graphQLErrors, networkError);
    const { operationName } = operation;
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        if (
          (message || "").toLowerCase().includes("unauthenticated") ||
          message.startsWith("Context creation failed")
        ) {
          console.log(
            `[Auth Error]: Called ${operationName} with ${
              variables.token ? "a bad token" : "no token"
            }`
          );
          NavigationService.navigate("LoggingOut");
        } else {
          const error = `[GraphQL Error]: Message: ${message}, in ${operationName}, with variables ${variables}`;
          console.log("Error: ", error);
          if (networkError) handleNetworkError(networkError, operation);
        }
      });
    } else if (networkError) {
      handleNetworkError(networkError, operation);
    }
  }
);

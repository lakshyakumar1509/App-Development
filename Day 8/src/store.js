import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer"; // Import your root reducer
import thunk from "redux-thunk";
const middleware = [thunk];

// Use Redux DevTools Extension to enhance debugging (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store by passing the rootReducer and middleware
const store = createStore(
  rootReducer, // The root reducer that combines all other reducers
  composeEnhancers(applyMiddleware(...middleware)) // Apply middleware and DevTools extension enhancer
);

// Export the configured Redux store
export default store;
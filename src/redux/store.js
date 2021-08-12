import { rootReducer } from "./reducers";
const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware()
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers/rootReducer", () => {
    const { rootReducer: newRootReducer } = require("./reducers/rootReducer");
    store.replaceReducer(newRootReducer);
  });
}

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["all_products"],
};
const persistConfigLogin = {
  key: "login",
  storage,
  // whitelist: ["all_products"],
};

const persistedReducerLogin_signup = persistReducer(
  persistConfigLogin,
  login_signUpReducer
);
const persistedReducerCart = persistReducer(persistConfig, cartReducer);

export default configureStore({
  reducer: {
      // categories: categoriesReducer,
    //   product: productReducer,
      // login_signup: persistedReducerLogin_signup,
    //   profile: profileReducer,
    //   cart: persistedReducerCart,
    //   footers: footerReducer,
  },
  // devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

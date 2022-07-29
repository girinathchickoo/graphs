import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer, { initialState } from "../reducers";
import thunk from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// console.log(rootReducer);
// const persistedReducer = persistReducer(persistConfig, rootReducer.user);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
// export default store;
// export const persistor = persistStore(store);
const rr = combineReducers(rootReducer);
const store = createStore(rr);

export default store;

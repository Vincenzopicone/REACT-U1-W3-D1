import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* import appReducer from "../reducers"; */
import memoryReducer from "../reducers/memoryFav";
import searchReducer from "../reducers/searchReducer";

const rootReducers = combineReducers({
  /*  app: appReducer, */
  fav: memoryReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;

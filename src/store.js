import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger"
const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(thunk,logger)
);
export default store;
import { createStore, applyMiddleware } from "redux";
import { graphReducer } from "./reducers/graphReducer";
import thunk from "redux-thunk";

export const store = createStore(graphReducer, applyMiddleware(thunk));

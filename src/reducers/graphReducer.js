import {
  ACTION_SET_IS_FETCHING,
  ACTION_SET_LOADED_GRAPHS,
  ACTION_SET_REQUEST_ERROR,
  ACTION_CREATE_GRAPH
} from "../actions/constants";

const initialState = {
  graphs: [],
  isFetching: false,
  err: null
};

export const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CREATE_GRAPH:
      return { ...state, graphs: [...state.graphs, action.payload] };
    case ACTION_SET_LOADED_GRAPHS:
      return { ...state, graphs: [...action.payload] };
    case ACTION_SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case ACTION_SET_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return { ...state };
  }
};

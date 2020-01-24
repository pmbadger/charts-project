import {
  ACTION_SET_IS_FETCHING,
  ACTION_SET_LOADED_GRAPHS,
  ACTION_SET_REQUEST_ERROR,
  ACTION_CREATE_GRAPH
} from "./constants";

export const actionCreateGraph = data => {
	return {
    type: ACTION_CREATE_GRAPH,
    payload: data
  };
};

export const actionSetLoadedGraphs = data => {
  return {
    type: ACTION_SET_LOADED_GRAPHS,
    payload: data
  };
};

export const actionSetIsFetching = isFetching => {
  return {
    type: ACTION_SET_IS_FETCHING,
    payload: isFetching
  };
};

export const actionSetRequestError = error => {
  return {
    type: ACTION_SET_REQUEST_ERROR,
    payload: error
  };
};

export const actionAddGraph = graph_type => dispatch => {
  dispatch(actionSetIsFetching(true));
  fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ graph_type })
  })
    .then(result =>
      result.json().then(data => {
        dispatch(actionCreateGraph(data));
        dispatch(actionSetIsFetching(false));
        dispatch(actionSetRequestError(""));
      })
    )
    .catch(err => {
      dispatch(
        actionSetRequestError("Something went wrong, please try again later")
      );
      dispatch(actionSetIsFetching(false));
    });
};

export const actionLoadGraph = () => dispatch => {
  dispatch(actionSetIsFetching(true));
  fetch("http://localhost:5000")
    .then(result =>
      result.json().then(data => {
        dispatch(actionSetLoadedGraphs(data));
        dispatch(actionSetIsFetching(false));
        dispatch(actionSetRequestError(""));
      })
    )
    .catch(err => {
      dispatch(
        actionSetRequestError("Something went wrong, please try again later")
      );
      dispatch(actionSetIsFetching(false));
    });
};

import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, SORT_SURVEYS } from "./types";
import Materialize from "materialize-css";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post("/api/surveys", values);

    history.push("/surveys");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    var toastContent = "Not enough Credits";
    Materialize.toast(toastContent, 3000, "white red-text");
  }
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurveys = (surveyId, history) => async dispatch => {
  const res = await axios.post(`/api/delete`, surveyId);
  history.push("/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const sortSurveys = sortType => async dispatch => {
  //console.log(sortType);
  dispatch({ type: SORT_SURVEYS, payload: sortType });
};

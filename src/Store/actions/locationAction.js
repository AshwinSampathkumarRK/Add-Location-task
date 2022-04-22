import {
  GET_LOCATION_DATA_SUCCESS,
  GET_LOCATION_DATA_FAIL,
  CREATE_LOCATION_DATA_SUCCESS,
  CREATE_LOCATION_DATA_FAIL,
  UPDATE_LOCATION_DATA_SUCCESS,
  UPDATE_LOCATION_DATA_FAIL,
} from "./eventsActionTypes";
import Services from "../../Services";

export const getLocationData = (payload) => async (dispatch) => {
  Services.getData(payload)
    .then((response) => {
      dispatch({
        type: GET_LOCATION_DATA_SUCCESS,
        payload: response?.data?.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_LOCATION_DATA_FAIL,
        payload: [],
      });
    });
};

export const updateLocationData = (payload) => async (dispatch) => {
  await Services.updateData(payload)
    .then((response) => {
      dispatch({
        type: UPDATE_LOCATION_DATA_SUCCESS,
        payload: { data: response?.data?.data[0], success: true },
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_LOCATION_DATA_FAIL,
        payload: { data: err, success: false },
      });
    });
};

export const createLocationData = (payload) => async (dispatch) => {
  await Services.createData(payload)
    .then((response) => {
      dispatch({
        type: CREATE_LOCATION_DATA_SUCCESS,
        payload: { data: response?.data?.data[0], success: true },
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_LOCATION_DATA_FAIL,
        payload: { data: err, success: false },
      });
    });
};

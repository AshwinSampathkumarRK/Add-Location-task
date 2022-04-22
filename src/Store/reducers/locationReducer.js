import {
  GET_LOCATION_DATA_SUCCESS,
  GET_LOCATION_DATA_FAIL,
  CREATE_LOCATION_DATA_SUCCESS,
  CREATE_LOCATION_DATA_FAIL,
  UPDATE_LOCATION_DATA_SUCCESS,
  UPDATE_LOCATION_DATA_FAIL,
} from "../actions/eventsActionTypes";

let initialState = {
  locationData: [],
  createLocationResponse: null,
  updateLocationResponse: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION_DATA_SUCCESS:
      return {
        ...state,
        locationData: action.payload,
      };
    case GET_LOCATION_DATA_FAIL:
      return {
        ...state,
        locationData: action.payload,
      };
    case CREATE_LOCATION_DATA_SUCCESS:
      return {
        ...state,
        createLocationResponse: action.payload,
      };
    case CREATE_LOCATION_DATA_FAIL:
      return {
        ...state,
        createLocationResponse: action.payload,
      };
    case UPDATE_LOCATION_DATA_SUCCESS:
      return {
        ...state,
        updateLocationResponse: action.payload,
      };
    case UPDATE_LOCATION_DATA_FAIL:
      return {
        ...state,
        updateLocationResponse: action.payload,
      };
    default:
      return state;
  }
}

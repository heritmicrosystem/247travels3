import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  airports: [],
  flightResults: [],
  selectedOffer: {},
  flightRequest: {},
};

export const flightReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_AIRPORTS:
      return { ...state, airports: payload };
    case ActionTypes.SET_FLIGHT_RESULTS:
      return { ...state, flightResults: payload };
    case ActionTypes.SET_SELECTED_FLIGHT_OFFER:
      return { ...state, selectedOffer: payload };
    case ActionTypes.SET_FLIGHT_REQUEST:
      return { ...state, flightRequest: payload };
    default:
      return state;
  }
};

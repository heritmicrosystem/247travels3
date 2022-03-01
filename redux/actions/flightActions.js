import { ActionTypes } from '../constants/actionTypes';

export const setAirports = (airports) => {
    return {
        type: ActionTypes.SET_AIRPORTS,
        payload: airports
    };
};

export const setFlightResults = (flightResults) => {
    return {
        type: ActionTypes.SET_FLIGHT_RESULTS,
        payload: flightResults
    };
};

export const setSelectedFlightOffer = (flightOffer) => {
    return {
        type: ActionTypes.SET_SELECTED_FLIGHT_OFFER,
        payload: flightOffer
    };
};

export const setFlightRequest = (flightRequest) => {
    return {
        type: ActionTypes.SET_FLIGHT_REQUEST,
        payload: flightRequest
    };
};

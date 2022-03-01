import axios from 'axios';

export default class ApiRoutes {

    static BASE_URL = 'https://api.247travels.xown.solutions/';
    static BASE_URL_TEST = 'https://apitest.247travels.com/';
    static BASE_URL_LIVE = 'https://apilive.247travels.com/';
    static BASE_URL_LOCAL = 'http://192.168.1.41:5071/';
    static BASE_URL_LOCAL_S = 'https://localhost:7071/';

    // The route to the FetchAirports endpoint
    static FetchAirports = 'api/airports/fetch';

    // The route to the GetFlightOffers endpoint
    static FlightOffers = 'api/flight/offers';
    
    // The route to the InitializeFlightOrder endpoint
    static InitializeFlightOrder = 'api/flight/order/initialize';

    // The route to the InitializePayment endpoint
    static InitializePayment = 'api/payment/initialize';

    // The route to the VerifyPayment endpoint
    static VerifyPayment = 'api/payment/verify';

    // The route to the ReserveFlight endpoint
    static ReserveFlight = 'api/flight/order/reserve';
}


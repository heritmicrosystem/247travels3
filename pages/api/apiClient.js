import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAirports,
  setFlightRequest,
  setFlightResults,
} from "../../redux/actions/flightActions";
import ApiRoutes from "./apiRoutes";
import https from "https";

const BASE_URL = ApiRoutes.BASE_URL_TEST;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export default axios.create({
  baseURL: BASE_URL,
  httpsAgent,
});

const API = axios.create({
  baseURL: BASE_URL,
  httpsAgent,
});

export function useFetchAirportsWithReturnData() {
  async function fetchAirportsWithReturnData() {
    var result = await API.get(ApiRoutes.FetchAirports);

    return result;
  }

  return fetchAirportsWithReturnData;
}

export function useFetchAirports() {
  const dispatch = useDispatch();

  async function fetchAirports() {
    var data = {
      url: `${BASE_URL}api/airports/fetch`,
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http:localhost:3000",
        "Access-Control-Allow-Credentials": true,
      },
    };
    await axios(data)
      .then((result) => {
        // result.data.response.forEach(airport => {
        //   airport.name = airport.name.toUpperCase(),
        //   airport.city = airport.city.toUpperCase(),
        //   airport.country = airport.country.toUpperCase(),
        //   airport.iataCode = airport.iataCode.toUpperCase()
        // });
        console.log(result);
        const newData = [
          ...new Set(
            result.data.response.map((x) => ({
              iataCode: x.iataCode,
              name: x.name,
              city: x.city,
              country: x.country,
            }))
          ),
        ];
        dispatch(setAirports(newData));
      })
      .catch((err) => {
        console.error("HttpErr:", err);
      });
  }

  return fetchAirports;
}

export function useFetchFlightResults() {
  const dispatch = useDispatch();
  async function fetchFlightResults(data) {
    var originDestinations = [];

    var travelers = [];

    var sources = ["GDS"];

    var searchCriteria = {
      maxFlightOffers: 250,
      flightFilters: {
        cabinRestrictions: [
          {
            cabin: data.flightClass,
            coverage: "ALL_SEGMENTS",
            // remind peter the meaning of this json
            originDestinationIds: ["1"],
          },
        ],
      },
      additionalInformation: {
        chargeableCheckedBags: false,
        brandedFares: false,
        fareRules: true,
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
      },
    };

    for (let i = 1; i <= data.numberOfAdults; i++) {
      travelers.push({
        id: i,
        travelerType: "ADULT",
        fareOptions: ["STANDARD"],
      });
    }

    if (!data.numberOfChildren < 1) {
      for (let i = 1; i <= data.numberOfChildren; i++) {
        travelers.push({
          id: i,
          travelerType: "CHILD",
          fareOptions: ["STANDARD"],
        });
      }
    }

    if (!data.numberOfInfants < 1) {
      for (let i = 1; i <= data.numberOfInfants; i++) {
        travelers.push({
          id: i,
          travelerType: "SEATED_INFANT",
          fareOptions: ["STANDARD"],
        });
      }
    }

    travelers.forEach((traveler, index) => {
      let id = ++index;
      traveler.id = id.toString();
    });

    originDestinations.push({
      id: "1",
      originLocationCode: data.originLocationCityCode,
      destinationLocationCode: data.originDestinationCityCode,
      departureDateTimeRange: {
        date: data.departureDate,
        // do logic for the dateWindow
        datewindows: data.dateWindow ? "I3D" : null,
      },
    });
    originDestinations.push({
      id: "2",
      originLocationCode: data.originDestinationCityCode,
      destinationLocationCode: data.originLocationCityCode,
      departureDateTimeRange: {
        date: data.returningDate,
        // do logic for the dateWindow
        datewindows: data.dateWindow ? "I3D" : null,
      },
    });

    // Set the body of the request
    var content = {
      currencyCode: "NGN",
      originDestinations: originDestinations,
      travelers: travelers,
      sources: sources,
      searchCriteria: searchCriteria,
    };

    dispatch(setFlightRequest(content));
    console.log("Request Content", content);

    var options = {
      url: `${BASE_URL}api/flight/offers`,
      method: "post",
      data: content,
      httpsAgent: httpsAgent,
    };
    return await axios(options)
      .then(async (result) => {
        console.log("Flight Response:", result);
        var amaClientRefHeader = result.data.httpResponse.headers.find(
          (p) => p.key == "ama-client-ref"
        );
        console.log(amaClientRefHeader);
        window.localStorage.setItem(
          "Ama-Client-Ref",
          amaClientRefHeader.value[0]
        );
        // Set the search results in redux
        dispatch(setFlightResults(result.data.response));
      })
      .catch((err) => {
        console.error("Http Error", err);
        throw new Error("Could not contact the server");
      });
  }

  return fetchFlightResults;
}

export function useInitializeFlightOrder() {
  async function initializeFlightOrder(
    travelerInfo,
    travelerPricings,
    flightOfferId
  ) {
    var travelers = [];

    travelerPricings.forEach((traveler, index) => {
      // Set keys
      let travelerTitle = `travelerTitle${traveler.travelerId}`;
      let travelerSurName = `travelerSurName${traveler.travelerId}`;
      let travelerFirstName = `travelerFirstName${traveler.travelerId}`;
      let travelerMiddleName = `travelerMiddleName${traveler.travelerId}`;
      let travelerCountry = `travelerCountry${traveler.travelerId}`;
      let travelerGender = `travelerGender${traveler.travelerId}`;
      let travelerYearOfBirth = `travelerYearOfBirth${traveler.travelerId}`;
      let travelerMonthOBirth = `travelerMonthOBirth${traveler.travelerId}`;
      let travelerDayOfBirth = `travelerDayOfBirth${traveler.travelerId}`;

      travelers.push({
        title: travelerInfo[travelerTitle],
        firstName: travelerInfo[travelerSurName],
        lastName: travelerInfo[travelerFirstName],
        // middleName: travelerInfo[travelermiddleName],
        nationality: travelerInfo[travelerCountry],
        gender: travelerInfo[travelerGender],
        dateOfBirth: `${travelerInfo[travelerYearOfBirth]}-${travelerInfo[travelerMonthOBirth]}-${travelerInfo[travelerDayOfBirth]}`,
      });
    });

    // Set the body of the request
    var content = {
      flightOfferId: flightOfferId,
      travelers: travelers,
      travelerContact: {
        email: travelerInfo.email,
        phone: travelerInfo.phone,
        countryCallingCode: "234",
      },
    };

    console.log("Request Content", content);

    // Set the headers
    let headers = {
      "Ama-Client-Ref": window.localStorage.getItem("Ama-Client-Ref"),
    };

    // Fire the request
    var result = await API.post(ApiRoutes.InitializeFlightOrder, content, {
      headers: headers,
    });

    // Return the result
    return result;
  }

  return initializeFlightOrder;
}

// Initialize payment transaction
export function useInitializePayment() {
  async function initializePayment(data) {
    // Set the body of the request
    var content = {
      customerId: data.customerId,
      flightOrderId: data.flightOrderId,
      amount: data.amount,
      callbackUrl: data.callbackUrl,
    };

    console.log("Request Content", content);

    // Fire the API request
    var result = await API.post(ApiRoutes.InitializePayment, content);

    // Return the API response
    return result;
  }

  return initializePayment;
}

// Verify payment transaction
export function useVerifyPayment() {
  async function verifyPayment(data) {
    // var options = {
    //   url: `${BASE_URL}api/payment/verify?trxref=${data.trxref}&reference=${data.reference}`,
    //   method: "get",
    // };
    // await axios(options)
    //   .then((result) => {
    //     console.log("Flight Response:", result);
    //     // Set the search results in redux
    //     // dispatch(setFlightResults(result.data.response));
    //     return result;
    //   })
    //   .catch((err) => {
    //     console.error("Http Error", err);
    //     throw new Error("Could not contact the server");
    //   });

    // Fire the API request
    var result = await API.get(
      `${ApiRoutes.VerifyPayment}?trxref=${data.trxref}&reference=${data.reference}`
    );

    // Return the response
    return result;
  }

  return verifyPayment;
}

export function useInitializeFlightReservation() {
  async function initializeFlightReservation() {
    var result = await API.post(ApiRoutes.ReserveFlight);

    return result;
  }

  return initializeFlightReservation;
}

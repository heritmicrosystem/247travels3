import Table from "react-bootstrap/Table";
import Image from "next/image";
import { useSelector } from "react-redux";

const BookedFlightTable = () => {
  let flightResults = useSelector((state) => state.store.flightResults);
  // sort by price, airline and stops

  let iataAirlines = [];
  for (let key of Object.keys(flightResults.dictionaries.carriers)) {
    iataAirlines.push(key);
  }

  // tooltip

  // Function to return minimum price for each airline per segment
  const returnMinforEachAirline = (response, airline, segmentLen) => {
    if (response && response.offerInfos.length > 0) {
      let minforEachAirline;
      let flightPrices = [];
      for (let i = 0; i < response.offerInfos.length; i++) {
        if (
          response.offerInfos[i].itineraries[0].segments[0].carrier.iataCode ===
          airline
        ) {
          if (
            response.offerInfos[i].itineraries[0].segments.length === segmentLen
          ) {
            flightPrices.push(response.offerInfos[i].price.grandTotal);
            if (response.offerInfos[i].price.grandTotal < flightPrices) {
              minforEachAirline = response.offerInfos[i].price.grandTotal;
            }
            minforEachAirline = flightPrices[0];
          }
        }
      }
      return minforEachAirline;
    }
  };

  // Function to return minimum price for all airline per segment
  const returnMinforAllAirlines = (response, segmentLen) => {
    if (response && response.offerInfos.length > 0) {
      let minforEachAirline;
      let flightPrices = [];
      for (let i = 0; i < response.offerInfos.length; i++) {
        if (
          response.offerInfos[i].itineraries[0].segments.length === segmentLen
        ) {
          flightPrices.push(response.offerInfos[i].price.grandTotal);
          if (response.offerInfos[i].price.grandTotal < flightPrices) {
            minforEachAirline = response.offerInfos[i].price.grandTotal;
          }
          minforEachAirline = flightPrices[0];
        }
      }
      return minforEachAirline;
    }
  };

  const zeroStopPriceForAllAirlines = returnMinforAllAirlines(flightResults, 1);
  if (zeroStopPriceForAllAirlines) {
    const formattedZeroStopPriceForAllAirlines = parseFloat(
      zeroStopPriceForAllAirlines
    ).toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  }

  const oneStopPriceForAllAirlines = returnMinforAllAirlines(flightResults, 2);
  if (oneStopPriceForAllAirlines) {
    const formattedOneStopPriceForAllAirlines = parseFloat(
      oneStopPriceForAllAirlines
    ).toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  }

  const onePlusStopPriceForAllAirlines = returnMinforAllAirlines(
    flightResults,
    3
  );
  if (onePlusStopPriceForAllAirlines) {
    const formattedOnePlusStopPriceForAllAirlines = parseFloat(
      onePlusStopPriceForAllAirlines
    ).toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  }

  const handleAirlineFilterByPrice = () => {
    // console.log(flightResults.offerInfos.filter());
  };

  return (
    <>
      <Table className="tbody td th" bordered responsive>
        <thead>
          <tr>
            <th className="tableHead">
              <div className="emptyHeader"></div>
            </th>
            <th
              className="clickable-airline"
              onClick={() => handleAirlineFilterByPrice()}
            >
              <div>All Airlines</div>
            </th>
            {iataAirlines.map((iata, index) => {
              // console.log(iata);
              return (
                <th className="clickable-airline" key={index}>
                  <img
                    src={`https://wakanow-images.azureedge.net/Images/flight-logos/${iata}.gif`}
                    alt={iata}
                    onClick={() => handleAirlineFilterByPrice()}
                  />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Nonstop</th>
            {
              <td className="clickable-airline">
                {formattedZeroStopPriceForAllAirlines}
              </td>
            }
            {iataAirlines.map((iataAirline, index) => {
              const price = returnMinforEachAirline(
                flightResults,
                iataAirline,
                1
              );
              if (price) {
                const formattedPrice = parseFloat(price).toLocaleString(
                  "en-NG",
                  {
                    style: "currency",
                    currency: "NGN",
                  }
                );
                const clickableAirline = "clickable-airline";
                // write onClick function here
              }
              return (
                <td className={clickableAirline} key={index}>
                  {formattedPrice}
                </td>
              );
            })}
          </tr>
          <tr>
            <th className="tableHead">1 Stop</th>
            <td className="clickable-airline">
              {formattedOneStopPriceForAllAirlines}
            </td>
            {iataAirlines.map((iataAirline, index) => {
              const price = returnMinforEachAirline(
                flightResults,
                iataAirline,
                2
              );
              if (price) {
                const formattedPrice = parseFloat(price).toLocaleString(
                  "en-NG",
                  {
                    style: "currency",
                    currency: "NGN",
                  }
                );
                const clickableAirline = "clickable-airline";
                // write onClick function here
              }
              return (
                <td className={clickableAirline} key={index}>
                  {formattedPrice}
                </td>
              );
            })}
          </tr>
          <tr>
            <th className="tableHead">1+ Stops</th>
            <td className="clickable-airline">
              {formattedOnePlusStopPriceForAllAirlines}
            </td>
            {iataAirlines.map((iataAirline, index) => {
              const price = returnMinforEachAirline(
                flightResults,
                iataAirline,
                3
              );
              if (price) {
                const formattedPrice = parseFloat(price).toLocaleString(
                  "en-NG",
                  {
                    style: "currency",
                    currency: "NGN",
                  }
                );
                const clickableAirline = "clickable-airline";
                // write onClick function here
              }
              return (
                <td className={clickableAirline} key={index}>
                  {formattedPrice}
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
      <div></div>
      <div></div>
    </>
  );
};

export default BookedFlightTable;

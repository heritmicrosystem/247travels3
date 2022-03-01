import styles from "../styles/BookPage.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const BookingSummary = ({ setSelectedFlightOffer }) => {
  // const setSelectedFlightOffer = useSelector(
  //   (state) => state.store.selectedOffer
  // );

  useEffect(() => {
    console.log("Selected Offer:", setSelectedFlightOffer);
  });

  return (
    <>
      <div className="BookSummaryComp">
        <div className="action-panel">
          <div className={styles.actionPanelHeader}>
            <h5 className={styles.panelName}>Booking Summary</h5>
            <div className={styles.resetLabel}>
              {/* <div className={styles.restIconCase}>
                      <Image src={resetIcon} alt={"reset-icon"} />
                    </div>
                    <small>Reset all</small> */}
            </div>
          </div>
        </div>
        {/* ************ DEPARTURE ************ */}
        <div className="price-panel">
          <div className={styles.priceHeader}>
            <h5 className={styles.flightStatusName}>Departure</h5>
            <div className={styles.resetLabel}>
              <h5 className={styles.flightStatusDate}>
                {`${new Date(
                  setSelectedFlightOffer.itineraries[0].segments[0].segmentDeparture.at
                ).toLocaleString("default", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}`}
              </h5>
            </div>
          </div>
          <div className={styles.priceHeader} style={{ marginTop: "1rem" }}>
            <h5 className={styles.priceName}>
              {`${String(new Date(
                setSelectedFlightOffer.itineraries[0].segments[0].segmentDeparture.at
              ).getHours()).padStart(2, "0")}:${String(new Date(
                setSelectedFlightOffer.itineraries[0].segments[0].segmentDeparture.at
              ).getMinutes()).padStart(2, "0")}`}
              &nbsp; (
              {
                setSelectedFlightOffer.itineraries[0].segments[0]
                  .segmentDeparture.airport.iataCode
              }
              )
            </h5>
            <div className={styles.resetLabel}>
              <h5 className={styles.priceName}>
                {`${String(new Date(
                  setSelectedFlightOffer.itineraries[0].segments[
                    setSelectedFlightOffer.itineraries[0].segments.length - 1
                  ].segmentArrival.at
                ).getHours()).padStart(2, "0")}:${String(new Date(
                  setSelectedFlightOffer.itineraries[0].segments[
                    setSelectedFlightOffer.itineraries[0].segments.length - 1
                  ].segmentArrival.at
                ).getMinutes()).padStart(2, "0")}`}
                (
                {
                  setSelectedFlightOffer.itineraries[0].segments[
                    setSelectedFlightOffer.itineraries[0].segments.length - 1
                  ].segmentArrival.airport.iataCode
                }
                )
              </h5>
            </div>
          </div>
          <div className={styles.priceHeader} style={{ marginTop: "1rem" }}>
            <h5 className={styles.priceName}>
              {
                setSelectedFlightOffer.itineraries[0].segments[0]
                  .segmentDeparture.airport.name
              }
              , &nbsp;
              {
                setSelectedFlightOffer.itineraries[0].segments[0]
                  .segmentDeparture.airport.city
              }
            </h5>
            <div className={styles.resetLabel}>
              <h5 className={styles.ArrivalName}>
                {
                  setSelectedFlightOffer.itineraries[0].segments[
                    setSelectedFlightOffer.itineraries[0].segments.length - 1
                  ].segmentArrival.airport.name
                }
                , &nbsp;
                {
                  setSelectedFlightOffer.itineraries[0].segments[
                    setSelectedFlightOffer.itineraries[0].segments.length - 1
                  ].segmentArrival.airport.city
                }
              </h5>
            </div>
          </div>
        </div>
        {/* ************ RETURN ************** */}
        <div className="price-panel">
          <div className={styles.priceHeader}>
            <h5 className={styles.flightStatusName}>Return</h5>
            <div className={styles.resetLabel}>
              <h5 className={styles.flightStatusDate}>
                {`${new Date(
                  setSelectedFlightOffer.itineraries[1].segments[0].segmentDeparture.at
                ).toLocaleString("default", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}`}
              </h5>
            </div>
          </div>
          <div className={styles.priceHeader} style={{ marginTop: "1rem" }}>
            <h5 className={styles.priceName}>
              {`${String(new Date(
                setSelectedFlightOffer.itineraries[1].segments[0].segmentDeparture.at
              ).getHours()).padStart(2, "0")}:${String(new Date(
                setSelectedFlightOffer.itineraries[1].segments[0].segmentDeparture.at
              ).getMinutes()).padStart(2, "0")}`}
              &nbsp; (
              {
                setSelectedFlightOffer.itineraries[1].segments[0]
                  .segmentDeparture.airport.iataCode
              }
              )
            </h5>
            <div className={styles.resetLabel}>
              <h5 className={styles.priceName}>
                {`${String(new Date(
                  setSelectedFlightOffer.itineraries[1].segments[
                    setSelectedFlightOffer.itineraries[1].segments.length - 1
                  ].segmentArrival.at
                ).getHours()).padStart(2, "0")}:${String(new Date(
                  setSelectedFlightOffer.itineraries[1].segments[
                    setSelectedFlightOffer.itineraries[1].segments.length - 1
                  ].segmentArrival.at
                ).getMinutes()).padStart(2, "0")}`}
                (
                {
                  setSelectedFlightOffer.itineraries[1].segments[
                    setSelectedFlightOffer.itineraries[1].segments.length - 1
                  ].segmentArrival.airport.iataCode
                }
                )
              </h5>
            </div>
          </div>
          <div className={styles.priceHeader} style={{ marginTop: "1rem" }}>
            <h5 className={styles.priceName}>
              {
                setSelectedFlightOffer.itineraries[1].segments[0]
                  .segmentDeparture.airport.name
              }
              , &nbsp;
              {
                setSelectedFlightOffer.itineraries[1].segments[0]
                  .segmentDeparture.airport.city
              }
            </h5>
            {/* ****** ARRIVAL ********** */}
            <div className={styles.resetLabel}>
              <h5 className={styles.ArrivalName}>
                {
                  setSelectedFlightOffer.itineraries[1].segments[setSelectedFlightOffer.itineraries[1].segments.length - 1].segmentArrival.airport.name
                }
                , &nbsp;
                {
                  setSelectedFlightOffer.itineraries[1].segments[setSelectedFlightOffer.itineraries[1].segments.length - 1].segmentArrival.airport.city
                }
              </h5>
            </div>
          </div>
        </div>

        <div>
          <div className="price-panel">
            <div className={styles.priceHeader}>
              <h5 className={styles.flightFare}>Flight Base Fare</h5>
            </div>
            <div className="airline-link-price">
              {/* <div className="flight-checkbox d-flex ">
                <p className="checkbox-paragraph">Adult</p>
              </div> */}
              <div className="">
                <p className="price-list-p"></p>
              </div>
            </div>
            <FlightBaseFare airline={"Adult"} price={"2"} />
            <FlightBaseFare airline={"Children"} price={"2"} />
            <FlightBaseFare airline={"Infants"} price={"1"} />
            <FlightBaseFare
              airline={"Base Fare"}
              price={parseFloat(
                setSelectedFlightOffer.price.base
              ).toLocaleString("en-NG", { style: "currency", currency: "NGN" })}
            />
            <FlightBaseFare airline={"Discount"} price={"No"} />
            <FlightBaseFare
              airline={"Total Fare"}
              price={parseFloat(
                setSelectedFlightOffer.price.grandTotal
              ).toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            />
          </div>
          <div className={styles.totalSummary}>
            <h5 className={styles.totalFig}>Total</h5>
            <div className={styles.resetLabel}>
              <h5 className={styles.totalFig}>
                {parseFloat(setSelectedFlightOffer.price.total).toLocaleString(
                  "en-NG",
                  {
                    style: "currency",
                    currency: "NGN",
                  }
                )}
              </h5>
            </div>
          </div>
          <div className="price-panel">
            <h5 className={styles.priceHike}>
              {" "}
              This price may increase if you don&apos;t book now{" "}
            </h5>
          </div>
        </div>
        <div className="price-panel mt-5">
          <div className={styles.priceHeader}>
            <h5 className={styles.priceName}>
              For Enquiries or Support, Please call:
            </h5>
          </div>
          <div className={styles.priceHeader}>
            <h5 className={styles.enquiryNum}>+234 705 7000 247</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;

const FlightBaseFare = (props) => {
  return (
    <>
      <div className="airline-link-price mt-3">
        <div className="flight-checkbox d-flex ">
          <p className="checkbox-paragraph">{props.airline}</p>
        </div>
        <div className="">
          <p className="price-list-p"> {props.price}</p>
        </div>
      </div>
    </>
  );
};

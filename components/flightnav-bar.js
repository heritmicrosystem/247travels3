import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { Button as ButtonAnt } from "antd";
import styles from "../styles/flightNavBar.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import toFro from "../public/icons/to-fro.webp";
import DrawerRoundtrip from "../components/DrawerRoundtrip";
import { Form as FormAnt } from "antd";
import { useSelector } from "react-redux";

const FlightNavBar = () => {
  const [flightSearchForm] = FormAnt.useForm();

  function onOriginLocationSelected(originLocation) {
    console.log(originLocation.itemData);
    flightSearchForm.setFieldsValue({
      takeOffAirport: originLocation.itemData.iataCode,
    });
    flightSearchForm.setFieldsValue({
      originLocationCityCode: `${originLocation.itemData.city} (${originLocation.itemData.iataCode})`,
    });
  }

  function onDestinationLocationSelected(originLocation) {
    console.log(originLocation.itemData);
    flightSearchForm.setFieldsValue({
      destinationAirport: originLocation.itemData.iataCode,
    });
    flightSearchForm.setFieldsValue({
      originDestinationCityCode: `${originLocation.itemData.city} (${originLocation.itemData.iataCode})`,
    });
  }

  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [placement, setPlacement] = useState("top");

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onClose = () => {
    setVisibleDrawer(false);
  };

  const setSelectedFlightOffer = useSelector((state) =>
    state.store.flightResults.offerInfos.slice(0, 1)
  );

  const flightRequest = useSelector((state) => state.store.flightRequest);

  // get traveller pricing data
  const travelerPricing = setSelectedFlightOffer[0].travelerPricings;

  if (travelerPricing) {
    let adultCount = 0;
    let childCount = 0;
    let seatedInfantCount = 0;
    for (let i = 0; i < travelerPricing.length; i++) {
      if (travelerPricing[i].travelerType == "ADULT") {
        adultCount++;
      } else if (travelerPricing[i].travelerType == "CHILD") {
        childCount++;
      } else if (travelerPricing[i].travelerType == "SEATED_INFANT") {
        seatedInfantCount++;
      }
    }
  }

  const lastOriginDestination = flightRequest.originDestinations.length - 1;

  const lastSegment =
    setSelectedFlightOffer[0].itineraries[0].segments.length - 1;
  // console.log(setSelectedFlightOffer[0].itineraries[0].segments[0].segmentDeparture.airport.name);
  // console.log(setSelectedFlightOffer[0]);

  const cabin =
    setSelectedFlightOffer[0].travelerPricings[0].fareDetailsBySegment[0].cabin;
  // departure Date
  const departureTravellingDay = new Date(
    flightRequest.originDestinations[0].departureDateTimeRange.date
  ).getDate();

  const departureTravellingMonth = new Date(
    flightRequest.originDestinations[0].departureDateTimeRange.date
  ).toLocaleString("default", { month: "short" });

  const departureTravellingYear = new Date(
    flightRequest.originDestinations[0].departureDateTimeRange.date
  ).getFullYear();
  // End departure Date

  // Arrival Date
  const arrivalTravellingDay = new Date(
    flightRequest.originDestinations[
      lastOriginDestination
    ].departureDateTimeRange.date
  ).getDate();

  const arrivalTravellingMonth = new Date(
    flightRequest.originDestinations[
      lastOriginDestination
    ].departureDateTimeRange.date
  ).toLocaleString("default", { month: "short" });

  const arrivalTravellingYear = new Date(
    flightRequest.originDestinations[
      lastOriginDestination
    ].departureDateTimeRange.date
  ).getFullYear();
  // end Arrival Date

  return (
    <>
      <div className={styles.flightNavWrapper}>
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className={styles.destinationOrigin}>
              <div className={styles.locations}>
                {/* <p className={styles.airportName}>{flightResultsSummary.itineraries[0].segments[0].segmentDeparture,airport.city}, Nigeria, </p> */}
                <p className={styles.airportName}>
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[0]
                      .segmentDeparture.airport.city
                  }
                  ,{" "}
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[0]
                      .segmentDeparture.airport.country
                  }
                  ,{" "}
                </p>
                <p className={styles.airportName}>
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[0]
                      .segmentDeparture.airport.name
                  }
                  ,{" "}
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[0]
                      .segmentDeparture.airport.iataCode
                  }
                </p>
              </div>
              <div className={styles.tofroCase}>
                <Image src={toFro} alt={"to-and-fro-movement"} />
              </div>
              <div className={styles.locations}>
                <p className={styles.airportName}>
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[
                      lastSegment
                    ].segmentArrival.airport.city
                  }
                  ,{" "}
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[
                      lastSegment
                    ].segmentArrival.airport.country
                  }
                  ,{" "}
                </p>
                <p className={styles.airportName}>
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[
                      lastSegment
                    ].segmentArrival.airport.name
                  }
                  ,{" "}
                  {
                    setSelectedFlightOffer[0].itineraries[0].segments[
                      lastSegment
                    ].segmentArrival.airport.iataCode
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 dateCase d-flex">
            <div className={styles.dateCase}>
              <div>
                <p className={styles.date}>
                  {departureTravellingMonth} {departureTravellingDay},{" "}
                  {departureTravellingYear} - {arrivalTravellingMonth}{" "}
                  {arrivalTravellingDay}, {arrivalTravellingYear}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-1 classCase d-flex">
            <div className={styles.classCase}>
              <div className={styles.class}>
                <p className={styles.date}>{cabin}</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="d-flex travelerNum">
              <div className={styles.adultNum}>
                <span>Adult</span>
                <small>{adultCount}</small>
              </div>
              <div className={styles.childNum}>
                <span>Children</span>
                <small>{childCount}</small>
              </div>
              <div className={styles.infantNum}>
                <span>Infant</span>
                <small>{seatedInfantCount}</small>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-1" style={{ padding: 0 }}>
            <div className="modify-btn">
              <Button
                className={styles.modifyBtn}
                type="submit"
                onClick={showDrawer}
              >
                Modify
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>

      <Drawer
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visibleDrawer}
        extra={
          <Space>
            <ButtonAnt onClick={onClose}>Cancel</ButtonAnt>
          </Space>
        }
      >
        <DrawerRoundtrip />
      </Drawer>
    </>
  );
};

export default FlightNavBar;

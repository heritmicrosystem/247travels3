import React from "react";
import styles from "../styles/Home.module.css";
import { List, Card, Row, Col } from "antd";
import { useSelector } from "react-redux";
import FlightItinarary from "./FlightItinarary";

const FlightDetails = ({ flightOffer }) => {
  const state = { disabled: false };

  const flightResults = useSelector((state) => state.store.flightResults);
  console.log("Flight Results", flightResults.offerInfos);

  const { disabled } = state;
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div>
            {flightOffer.itineraries.map((itinarary, index) => (
              <FlightItinarary itinarary={itinarary} key={index} />
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div style={{ paddingRight: "1rem" }}>
            <p style={{ color: "#0043a4", fontWeight: "600" }}>
              Fare Breakdown
            </p>

            <div className={styles.fareBreakdown}>
              <p>Adult</p>
              <p>1</p>
            </div>
            {/*  */}
            <div className={styles.fareBreakdown}>
              <p>Base Fare</p>
              <p>{parseFloat(flightOffer.price.base).toLocaleString(
                'en-NG', {
                  style:"currency", 
                  currency:"NGN"
                }
              )}</p>
            </div>
            {/*  */}
            <div className={styles.fareBreakdown}>
              <p>Tax &amp; Fee</p>
              <p> - &nbsp; </p>
            </div>
            <div
              className={styles.fareBreakdownTotal}
              style={{
                backgroundColor: "#0043a4",
                padding: "0.5rem 0.4rem",
                color: "#fff",
              }}
            >
              <p style={{ marginBottom: "0" }}>Total: </p>
              <p style={{ marginBottom: "0" }}>
                {parseFloat(flightOffer.price.total).toLocaleString(
                  "en-NG", {
                    style:"currency",
                    currency:'NGN'
                  }
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetails;

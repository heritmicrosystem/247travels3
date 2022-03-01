import React from "react";
import { List, Row, Col } from "antd";
import { useSelector } from "react-redux";
import styles from "../styles/FlightItinary.module.css";

function FlightItinary({ itinarary }) {
  // const state = { disabled: false };
  // const flightResults = useSelector((state) => state.store.flightResults);
  // console.log("Flight Results", flightResults.offerInfos);

  // const { disabled } = state;

  return (
    <>
      <div style={{ color: "#0043a4", fontWeight: "600" }}>
        <span className="mt-3">{itinarary.itinerarySummary}</span>
      </div>

      <List
        dataSource={itinarary.segments}
        renderItem={(segment, index) => (
          <List.Item style={{ flexDirection: "column" }}>
            <Row style={{ width: "100%" }}>
              <Col span={6}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>
                    <img
                      src={`https://wakanow-images.azureedge.net/Images/flight-logos/${segment.carrier.iataCode}.gif`}
                      alt={segment.carrier.iataCode}
                      width="32px"
                    />
                  </span>
                  <span style={{ margin: "0 5px" }}></span>
                  <span>{segment.carrier.name}</span>
                </div>
              </Col>
              <Col span={6}>
                <div className={styles.fareBaseSegmentDeparture}>
                  <p style={{ color: "#0043a4" }}>
                    {segment.segmentDeparture.airport.cityCode}
                  </p>
                  <p style={{ color: "#0043a4", fontWeight: "600" }}>
                    {`${String(new Date( 
                      segment.segmentDeparture.at
                    ).getHours()).padStart(2, "0")}:${String(new Date(
                      segment.segmentDeparture.at
                    ).getMinutes()).padStart(2, "0")}`}
                  </p>
                  <p>{segment.segmentDeparture.airport.city}</p>
                </div>
              </Col>
              <Col span={6}>
                <p style={{ textAlign: "center", fontSize: "14px", marginBottom:'0', marginTop:'14px' }}>
                  {segment.duration}</p>

                <div style={{ position: "relative" }}>
                  <hr className="stops_hr" style={{ color: "orange" }} />
                </div>
              </Col>
              <Col span={6}>
                <div className={styles.fareBaseSegmentArrival}> 
                  <p style={{ color: "#0043a4" }}>
                  {segment.segmentArrival.airport.cityCode}</p>
                  <p style={{ color: "#0043a4", fontWeight: "600" }}>
                    {`${String(new Date(
                      segment.segmentArrival.at
                    ).getHours()).padStart(2, "0")}:${String(new Date(
                      segment.segmentArrival.at
                    ).getMinutes()).padStart(2, "0")}`}
                  </p>
                  <p>{segment.segmentArrival.airport.city}</p>
                  
                </div>
              </Col>
            </Row>

            <Row
              style={{
                backgroundColor: "#0043a4",
                padding: "10px",
                width: "100%",
                justifyContent: "space-evenly",
                color: "white",
                display: `${
                  itinarary.segments.length - 1 === index ? "none" : "flex"
                }`,
              }}
            >
              <span>
                Changing plane at <span style={{ color: "orange" }}>{segment.segmentArrival.airport.city}</span>
              </span>
              <span>
                <span style={{ color: "orange" }}>Waiting time:</span> 5 hours
              </span>
            </Row>
          </List.Item>
        )}
      ></List>
    </>
  );
}

export default FlightItinary;

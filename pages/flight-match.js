import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu, Dropdown, message, Tabs } from "antd";
import { Slider as SliderAnt } from "antd";
import { List, Card, Row, Col } from "antd";
import { Button as ButtonAnt } from "antd";
import Slider from "react-slick";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AirlineList from "../components/airline-price-list.js";
import AirlineTracker from "../components/airline-tracker.js";
import FlightNavBar from "../components/flightnav-bar.js";
import styled from "styled-components";
import { StopsDiv } from "../components/PlusMinusButton/BtnElements";
import { DownOutlined } from "@ant-design/icons";
import BookedFlightTable from "../components/bookedFlightTable.js";
import cheapestFlight from "../public/icons/cheapest-flight.webp";
import resetIcon from "../public/icons/refresh.webp";
import flightTo from "../public/icons/flight-to_.webp";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFlightOffer } from "../redux/actions/flightActions";
import FlightDetails from "../components/FlightDetails";

const { TabPane } = Tabs;

const Flight_match = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const dispatch = useDispatch();

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Cheapest</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Fastest</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Latest Departure</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">Earliest Departure</Menu.Item>
    </Menu>
  );

  const mark = {
    0: { label: <strong className="arithmeticsign">-</strong> },
    100: { label: <strong className="arithmeticsign">+</strong> },
  };

  const state = { disabled: false };

  let flightResults = useSelector((state) => state.store.flightResults);

  // let airlineName = [];
  // airlineName = airlineName.push(flightResults.dictionaries.carriers);
  // airlineName = [...flightResults.dictionaries.carriers];
  let airlineName = Object.values(flightResults.dictionaries.carriers);
  // console.log(airlineName);

  // console.log(flightResults.dictionaries.carriers);

  const carriers = flightResults.dictionaries.carriers;

  // print all keys

  // console.log(keys);

  // [ 'java', 'javascript', 'nodejs', 'php' ]

  // iterate over object

  let iataAirlines = [];
  for (let key of Object.keys(flightResults.dictionaries.carriers)) {
    iataAirlines.push(key);
  }

  let airlineNameAndCode = [];
  airlineNameAndCode.push(flightResults.dictionaries.carriers);
  // console.log(airlineNameAndCode);

  // Function to return minimum price for each airline per segment
  const returnMinforEachAirlineWithoutSegment = (response, airline) => {
    if (response && response.offerInfos.length > 0) {
      let minforEachAirline;
      let flightPrices = [];
      // console.log(response.offerInfos[0].itineraries[0].segments[0].carrier.name);
      for (let i = 0; i < response.offerInfos.length; i++) {
        if (
          response.offerInfos[i].itineraries[0].segments[0].carrier.iataCode ===
          airline
        ) {
          // console.log(response.offerInfos[i].itineraries[0].segments[0].carrier.name.toUpperCase());
          // console.log(response.offerInfos[i].itineraries[0].segments[0].carrier);
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
  // console.log("Flight Requests", flightRequest.originDestinations[0].departureDateTimeRange.date);
  // console.log("Flight Requests", flightRequest.originDestinations[lastOriginDestination].departureDateTimeRange.date);

  const [flightResultsLoadMore, setFlightResultsLoadMore] = useState(
    flightResults.offerInfos.slice(0, 15)
  );

  const [isLoading, setIsLoading] = useState(false);

  // loadMore function
  const onLoadMore = () => {
    setIsLoading(true);

    // get the number of items in the array
    const numberOfFlightResults = flightResultsLoadMore.length;

    setTimeout(() => {
      setFlightResultsLoadMore(
        flightResultsLoadMore.concat([
          ...flightResults.offerInfos.slice(
            numberOfFlightResults,
            numberOfFlightResults + 15
          ),
        ])
      );
    }, 1000);

    setIsLoading(false);

    // console.log(numberOfFlightResults);
  };

  const { disabled } = state;

  const [isShow, setIsShow] = useState(true);
  const handleEvent = () => {
    setIsShow(!isShow);
  };

  function onFlightOfferSelected(selectedOffer) {
    dispatch(setSelectedFlightOffer(selectedOffer));
  }
  // CREATE TOGGLE TO SHOW AND HIDE FLIGHT DETAILS
  function customToggle() {
    var x = document.getElementById("detailsDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function baggageToggle() {
    var y = document.getElementById("baggageDIV");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
  function rulesToggle() {
    var z = document.getElementById("rulesDIV");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }

  // function customToggle(evt, Name) {
  //   var i, tabContent, tabHead;
  //   tabContent = document.getElementsByClassName("tabContent");
  //   for (i = 0; i < tabContent.length; i++) {
  //     (tabContent[i]).style.display = "none";
  //   }
  //   tabHead = document.getElementsByClassName("tabHead");
  //   for (i = 0; i < tabHead.length; i++) {
  //     tabHead[i].className = tabHead[i].className.replace(" active", "");
  //   }
  //   document.getElementById(Name).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }

  // *********************************
  return (
    <>
      <div className={styles.containercustom}>
        <div className="container">
          <FlightNavBar flightResultsSummary={flightResultsLoadMore} />
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="action-panel">
                <div className={styles.actionPanelHeader}>
                  <h5 className={styles.panelName}>Filter</h5>
                  <div className={styles.resetLabel}>
                    <div className={styles.restIconCase}>
                      <Image src={resetIcon} alt={"reset-icon"} />
                    </div>
                    <small>Reset all</small>
                  </div>
                </div>
              </div>
              <div className="price-panel">
                <div className={styles.priceHeader}>
                  <h5 className={styles.priceName}>Price</h5>
                  <div className={styles.resetLabel}>
                    <div className={styles.restIconCase}>
                      <Image src={resetIcon} alt={"reset-icon"} />
                    </div>
                  </div>
                </div>
                <SliderAnt defaultValue={30} marks={mark} disabled={disabled} />
              </div>
              <div className="price-panel">
                <div className={styles.priceHeader}>
                  <h5 className={styles.priceName}>Number of Stops</h5>
                  <div className={styles.resetLabel}>
                    <div className={styles.restIconCase}>
                      <Image src={resetIcon} alt={"reset-icon"} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-12">
                    <div className="mt-5">
                      <Button className={styles.stopsDiv} type="submit">
                        0
                      </Button>{" "}
                      {/* <StopsDiv /> */}
                      <small>{formattedZeroStopPriceForAllAirlines}</small>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-12">
                    <div className="mt-5">
                      <Button className={styles.stopsDiv} type="submit">
                        1
                      </Button>{" "}
                      {/* <StopsDiv /> */}
                      <small>{formattedOneStopPriceForAllAirlines}</small>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-12">
                    <div className="mt-5">
                      <Button className={styles.stopsDiv} type="submit">
                        2
                      </Button>{" "}
                      {/* <StopsDiv /> */}
                      <small>{formattedOnePlusStopPriceForAllAirlines}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="price-panel">
                  <div className={styles.priceHeader}>
                    <h5 className={styles.priceName}>Airlines</h5>
                    <div className={styles.resetLabel}>
                      <div className={styles.restIconCase}>
                        <Image src={resetIcon} alt={"reset-icon"} />
                      </div>
                    </div>
                  </div>

                  {Object.entries(carriers).map(([key, value], index) => {
                    const airlinePrice = returnMinforEachAirlineWithoutSegment(
                      flightResults,
                      key
                    );
                    if (airlinePrice) {
                      const formattedairlinePrice = parseFloat(
                        airlinePrice
                      ).toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      });
                    }

                    return (
                      <AirlineList
                        key={index}
                        airline={value}
                        price={formattedairlinePrice}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Take Off flight and  Return Flight Section*/}
              {/* <div className="price-panel">
                <div className={styles.priceHeader}>
                  <h5 className={styles.priceName}>Take Off Flight</h5>
                  <div className={styles.resetLabel}>
                    <div className={styles.restIconCase}>
                      <Image src={resetIcon} alt={"reset-icon"} />
                    </div>
                  </div>
                </div>
                <AirlineTracker
                  destination={"Lagos to London"}
                  startTime={"18:45"}
                  endTime={"23:45"}
                />
                <AirlineTracker
                  destination={"London to Lagos"}
                  startTime={"20:45"}
                  endTime={"02:45"}
                />
                <div className="return-flight-wrapper">
                  <div className={styles.priceHeader}>
                    <h5 className={styles.priceName}>Return Flight</h5>
                    <div className={styles.resetLabel}>
                      <div className={styles.restIconCase}>
                        <Image src={resetIcon} alt={"reset-icon"} />
                      </div>
                    </div>
                  </div>
                  <AirlineTracker
                    destination={"Lagos to London"}
                    startTime={"18:45"}
                    endTime={"23:45"}
                  />
                  <AirlineTracker
                    destination={"London to Lagos"}
                    startTime={"20:45"}
                    endTime={"02:45"}
                  />
                </div>
              </div> */}
            </div>
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="action-panel-extended">
                <div className="row">
                  <div className="col-sm-12 col-md-4 ">
                    <div className={styles.sort_div_custom}>
                      <Dropdown classame={styles.anticonCustom} overlay={menu}>
                        <a
                          className="ant-dropdown-link sort-div-custom"
                          onClick={(e) => e.preventDefault()}
                        >
                          Sort By: Cheapest <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </div>
                  {/* <div className="col-sm-12 col-md-4 ">
                    <div className="cheapest-flight">
                      <div className="cheap-flight-wrapper">
                        <div>
                          <Image
                            src={cheapestFlight}
                            alt={"cheapest-flight-icon"}
                          />
                        </div>
                        <div className={styles.cheapflightStyle}>
                          <p className="cheapflightName">Cheapest Flight</p>
                          <small>From N 1,234,000</small>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Show calendar */}
                  {/* <div className="col-sm-12 col-md-4 ">
                    <div className="calender-visibility">
                      <div className={styles.sort_div_custom}>
                        <Dropdown
                          classame={styles.anticonCustom}
                          overlay={menu}
                        >
                          <a
                            className="ant-dropdown-link sort-div-custom"
                            onClick={(e) => e.preventDefault()}
                          >
                            Show Calender <DownOutlined />
                          </a>
                        </Dropdown>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="flight-description">
                <div className="position-relative" style={{margin:'30px'}}>
                    <BookedFlightTable />
                  {/* <Slider slidesToShow={1} slidesToScroll={1}>
                    {Array(1)
                      .fill("")
                      .map(() => (
                        <div>
                        </div>
                      ))}
                  </Slider>
                  <div
                    className="position-absolute d-inline-flex leftArrow-wrapper"
                  >
                    <ArrowLeftOutlined style={{ color: "#fff" }} />
                  </div>
                  <div className="position-absolute d-inline-flex RightArrow-wrapper">
                    <ArrowRightOutlined style={{ color: "#fff" }} />
                  </div> */}
                </div>
              </div>
              <div className="flight-description">
                {/* {flightResults.offerInfos.slice(0, 10).map((flightOffer) => (
                  <div className="">
                    <FlightDescription flightOffer={flightOffer} />
                  </div>
                ))} */}

                <List
                  // dataSource={flightResults.offerInfos.slice(0, 10)}
                  dataSource={flightResultsLoadMore}
                  renderItem={(item) => (
                    <List.Item>
                      <Card style={{ width: "100%" }}>
                        <Row>
                          <Col span={20}>
                            {item.itineraries.map((itinerary, index) => {
                              var departureSegment = itinerary.segments[0];
                              var arrivalSegment =
                                itinerary.segments[
                                  itinerary.segments.length - 1
                                ];
                              var numberOfStops = itinerary.segments.length - 1;
                              var marginBottom =
                                item.itineraries.length - 1 == index
                                  ? "0rem"
                                  : "2rem";

                              const cabin =
                                item.travelerPricings[0].fareDetailsBySegment[0]
                                  .cabin;
                              return (
                                <ItineraryTemplate
                                  key={""}
                                  itinerary={itinerary}
                                  departureSegment={departureSegment}
                                  arrivalSegment={arrivalSegment}
                                  numberOfStops={numberOfStops}
                                  marginBottom={marginBottom}
                                  cabin={cabin}
                                />
                              );
                            })}
                          </Col>
                          {/* display: flex;flex-direction: column;align-items: center;justify-content: center; */}
                          <Col
                            span={4}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <p className={styles.fetchOutput}>
                              {parseFloat(item.price.total).toLocaleString(
                                "en-NG",
                                {
                                  style: "currency",
                                  currency: "NGN",
                                }
                              )}
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <ButtonAnt
                                className={styles.btnAnt}
                                onClick={() => onFlightOfferSelected(item)}
                              >
                                <Link href="/bookPage">Book</Link>
                              </ButtonAnt>
                            </div>
                          </Col>
                        </Row>
                        {/* <Tabs defaultActiveKey="2" className="mt-5">
                            <TabPane
                              onChange={handleEvent}
                              tab={
                                <span>
                                  {" "}
                                  <Image src={flightTo} alt={""} />  &nbsp; Flight
                                  Details
                                </span>
                              }
                              key="1"
                            >
                              {" "}
                              <br />
                              {isShow ? (
                                <FlightDetails flightOffer={item} />
                              ) : (
                                <></>
                              )}
                            </TabPane>{" "}
                            <TabPane tab={<span>Baggage Info</span>} key="2">
                              Baggage Info
                            </TabPane>{" "}
                            <TabPane tab={<span>Flight Rules</span>} key="3">
                              Flight Rules
                            </TabPane>
                          </Tabs> */}

                        {/* <div className="custom-tab mb-3">
                            <Button className='tab-header-title' onClick={customToggle}>
                              <span className="tab-underline-hover" style={{marginBottom:"0", fontSize:'13px'}}>Flight Details</span> 
                            </Button>
                            <Button className='tab-header-title' onClick={baggageToggle}> <span className='tab-underline-hover' style={{marginBottom:"0", fontSize:'13px'}}> Baggage Info </span> </Button>
                            <Button className='tab-header-title' onClick={rulesToggle}> <span className='tab-underline-hover' style={{marginBottom:"0", fontSize:'13px'}}> Flight Rules </span></Button>
                        </div>
                          <div className="custom-tab-header">
                            <div id='detailsDIV' style={{width:"100%"}} >
                            {isShow ? (<FlightDetails flightOffer={item} /> ) : ( <></> )}
                            </div>
                          </div>
                            <div id='baggageDIV' style={{width:"100%"}} >
                            {isShow ? ('Baggage Info' ) : ( <></> )}
                            </div>
                            <div id='rulesDIV' style={{width:"100%"}} >
                            {isShow ? ('Flight Rules' ) : ( <></> )}
                            </div>   */}
                        <div className="custom-tab mb-3">
                          <button
                            style={{ border: "none", background: "#fff" }}
                            className="tab-header-title"
                            onClick={customToggle}
                          >
                            <span
                              className="tab-underline-hover"
                              style={{ marginBottom: "0", fontSize: "13px" }}
                            >
                              Flight Details
                            </span>
                          </button>
                          <Button
                            className="tab-header-title"
                            onClick={baggageToggle}
                          >
                            {" "}
                            <span
                              className="tab-underline-hover"
                              style={{ marginBottom: "0", fontSize: "13px" }}
                            >
                              {" "}
                              Baggage Info{" "}
                            </span>{" "}
                          </Button>
                          <Button
                            className="tab-header-title"
                            onClick={rulesToggle}
                          >
                            {" "}
                            <span
                              className="tab-underline-hover"
                              style={{ marginBottom: "0", fontSize: "13px" }}
                            >
                              {" "}
                              Flight Rules{" "}
                            </span>
                          </Button>
                        </div>
                        <div className="custom-tab-header">
                          <div id="detailsDIV" style={{ width: "100%" }}>
                            {isShow ? (
                              <FlightDetails flightOffer={item} />
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        <div id="baggageDIV" style={{ width: "100%" }}>
                          {isShow ? "Baggage Info" : <></>}
                        </div>
                        <div id="rulesDIV" style={{ width: "100%" }}>
                          {isShow ? "Flight Rules" : <></>}
                        </div>
                        {/* ***************************************** */}
                        {/* <div className="custom-tab mb-3">
                            <Button className='tabHead' onClick={(event) => customToggle(event, 'Flight Details')}>
                              <span className="tab-underline-hover" style={{marginBottom:"0", fontSize:'13px'}}>Flight Details</span> 
                            </Button>
                            <Button className='tabHead' onClick={(event) => customToggle(event, 'Baggage Info')}> <span className='tab-underline-hover' style={{marginBottom:"0", fontSize:'13px'}}> Baggage Info </span> </Button>
                            <Button className='tabHead' onClick={(event) => customToggle(event, 'Flight Rules')}> <span className='tab-underline-hover' style={{marginBottom:"0", fontSize:'13px'}}> Flight Rules </span></Button>
                        </div>
                          <div className="custom-tab-header">
                            <div id='detailsDIV' className='tabContent' style={{width:"100%"}} >
                            {isShow ? (<FlightDetails flightOffer={item} /> ) : ( <></> )}
                            </div>
                          </div>
                            <div id='baggageDIV' className='tabContent' style={{width:"100%"}} >
                            {isShow ? ('Baggage Info' ) : ( <></> )}
                            </div>
                            <div id='rulesDIV' className='tabContent' style={{width:"100%"}} >
                            {isShow ? ('Flight Rules' ) : ( <></> )}
                            </div>   */}
                      </Card>
                    </List.Item>
                  )}
                  gutter={4}
                ></List>
              </div>
              <div className={styles.loadMoreButton}>
                {isLoading ? null : (
                  <ButtonAnt className={styles.btnAnt} onClick={onLoadMore}>
                    Load More
                  </ButtonAnt>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ItineraryTemplate({
  itinerary,
  arrivalSegment,
  departureSegment,
  numberOfStops,
  marginBottom,
  cabin,
}) {
  return (
    <>
      <Row style={{ marginBottom: `${marginBottom}` }}>
        <Col span={5}>
          <img
            src={`https://wakanow-images.azureedge.net/Images/flight-logos/${departureSegment.carrier.iataCode}.gif`}
            alt={departureSegment.carrier.iataCode}
          />{" "}
          &nbsp;
          {departureSegment.carrier.name}
        </Col>

        <Col span={5}>
          <p className={styles.arrivalTime}>
            {`${String(
              new Date(departureSegment.segmentDeparture.at).getHours()
            ).padStart(2, "0")}:${String(
              new Date(departureSegment.segmentDeparture.at).getMinutes()
            ).padStart(2, "0")}`}
          </p>
          <p className={styles.locationCode}>
            {departureSegment.segmentDeparture.airport.iataCode}
          </p>
        </Col>

        <Col span={5} style={{ textAlign: "center" }}>
          {itinerary.duration}
          <div style={{ position: "relative" }}>
            <hr className="stops_hr" style={{ color: "#000" }} />
          </div>
          {numberOfStops > 1
            ? `${numberOfStops} Stops`
            : `${numberOfStops} Stop`}
        </Col>

        <Col span={5}>
          <p className={styles.arrivalTime}>
            {`${String(
              new Date(arrivalSegment.segmentArrival.at).getHours()
            ).padStart(2, "0")}:${String(
              new Date(arrivalSegment.segmentArrival.at).getMinutes()
            ).padStart(2, "0")}`}
          </p>
          <p className={styles.locationCode}>
            {arrivalSegment.segmentArrival.airport.iataCode}
          </p>
        </Col>

        <Col span={4}>{cabin}</Col>
      </Row>
    </>
  );
}

export default Flight_match;

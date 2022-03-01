import React, { useState, useRef } from "react";
import styles from "../styles/BookPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  message,
  Tabs,
  Form,
  Modal,
} from "antd";
import {
  List,
  Card,
  Row,
  Col,
  Input,
  Tooltip,
  Select,
  Checkbox,
  Anchor,
} from "antd";
import flightTo from "../public/icons/flight-to_.webp";
import {
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import Accordion from "../components/Accordion.js";
import BookingSummary from "../components/BookingSummary";
import FlightDetails from "../components/FlightDetails";
import "../components/Files/countries";
import "../components/Files/months";
import "../components/Files/years";
import "../components/Files/days";
import { useInitializeFlightOrder } from "./api/apiClient";
import { useRouter } from "next/router";
import { ToastComponent } from '@syncfusion/ej2-react-notifications';

const { TabPane } = Tabs;

const Flight_match = () => {
  const router = useRouter();

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const state = { disabled: false };

  const setSelectedFlightOffer = useSelector(
    (state) => state.store.selectedOffer
  );

  console.log("Selected Offer:", setSelectedFlightOffer);

  const flightResults = useSelector((state) => state.store.flightResults);

  console.log("Flight Results", flightResults.offerInfos);

  const { disabled } = state;

  const [isShow, setIsShow] = useState(true);

  const [
    flightOrderInitializationModelVisibility,
    setFlightOrderInitializationModelVisibility,
  ] = useState(false);

  const handleEvent = () => {
    setIsShow(!isShow);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  // const { Link } = Anchor;
  const [travelerForm] = Form.useForm();

  const toastInstance = useRef(null);

  const initializeFlightOrder = useInitializeFlightOrder();

  function displayError(title, content) {
    toastInstance.current.title = title;
    toastInstance.current.content = content;
    toastInstance.current.cssClass = 'e-error';
    toastInstance.current.show();
  }

  function displayInfo(title, content) {
    toastInstance.current.title = title;
    toastInstance.current.content = content;
    toastInstance.current.cssClass = 'e-info';
    toastInstance.current.show();
  }

// Hook for terms and conditions modal
  const [isShowModal, setIsShowModal] = useState(false);

  function showModal() {
    setIsShowModal(true);
  }

  function handleOk() {
    setIsShowModal(false); 
  }

  function handleCancel() {
    setIsShowModal(false); 
  }

  return (
    <>
      <div className={styles.containercustom}>
        <div className="container">
          {/* <FlightNavBar /> */}
          <div className="row pt-5 pb-5">
            <div className="col-xl-3 col-lg-4 col-12">
              <BookingSummary setSelectedFlightOffer={setSelectedFlightOffer} />
            </div>
            <div className="col-xl-9 col-lg-8 col-12">
              {/* <div className="action-panel-extended"></div> */}

              <div className="flight-description">
                <div className={styles.bookingSummary}>
                  <List
                    dataSource={flightResults.offerInfos.slice(0, 1)}
                    renderItem={(item) => (
                      <List.Item>
                        <Card style={{ width: "100%" }}>
                          <Row>
                            <Col span={20}>
                              <Row>
                                <Col span={5}>
                                  <img
                                    src={`https://wakanow-images.azureedge.net/Images/flight-logos/${item.itineraries[0].segments[0].carrier.iataCode}.gif`}
                                    alt={
                                      item.itineraries[0].segments[0].carrier
                                        .iataCode
                                    }
                                  />
                                  {item.itineraries[0].segments[0].carrier.name}
                                </Col>

                                <Col span={5}>
                                  <p
                                    className={styles.arrivalTime}
                                  >{`${String(new Date(
                                    item.itineraries[0].segments[0].segmentDeparture.at
                                  ).getHours()).padStart(2, "0")}:${String(new Date(
                                    item.itineraries[0].segments[0].segmentDeparture.at
                                  ).getMinutes()).padStart(2, "0")}`}</p>
                                  <p className={styles.locationCode}>
                                    {
                                      item.itineraries[0].segments[0]
                                        .segmentDeparture.airport.iataCode
                                    }
                                  </p>
                                </Col>

                                <Col span={5}>
                                  <p style={{ textAlign: "center" }}>
                                    {item.itineraries[0].duration}
                                  </p>

                                  <div style={{ position: "relative" }}>
                                    <hr
                                      className="stops_hr"
                                      style={{ color: "#000" }}
                                    />
                                  </div>
                                </Col>

                                <Col span={5}>
                                  <p
                                    className={styles.arrivalTime}
                                  >{`${String(new Date(
                                    item.itineraries[0].segments[0].segmentArrival.at
                                  ).getHours()).padStart(2, "0")}:${String(new Date(
                                    item.itineraries[0].segments[0].segmentArrival.at
                                  ).getMinutes()).padStart(2, "0")}`}</p>
                                  <p className={styles.locationCode}>
                                    {
                                      item.itineraries[0].segments[item.itineraries[0].segments.length - 1]
                                        .segmentArrival.airport.iataCode
                                    }
                                  </p>
                                </Col>

                                <Col span={4}>Economy</Col>
                              </Row>

                              <Row className={styles.arrivalRow}>
                                <Col span={5}>
                                  <img
                                    src={`https://wakanow-images.azureedge.net/Images/flight-logos/${item.itineraries[1].segments[0].carrier.iataCode}.gif`}
                                    alt={
                                      item.itineraries[1].segments[0].carrier
                                        .iataCode
                                    }
                                  />
                                  {item.itineraries[1].segments[0].carrier.name}
                                </Col>

                                <Col span={5}>
                                  <p
                                    className={styles.arrivalTime}
                                  >{`${String(new Date(
                                    item.itineraries[1].segments[0].segmentDeparture.at
                                  ).getHours()).padStart(2, "0")}:${String(new Date(
                                    item.itineraries[1].segments[0].segmentDeparture.at
                                  ).getMinutes()).padStart(2, "0")}`}</p>
                                  <p className={styles.locationCode}>
                                    {
                                      item.itineraries[1].segments[0]
                                        .segmentDeparture.airport.iataCode
                                    }
                                  </p>
                                </Col>

                                <Col span={5}>
                                  <p style={{ textAlign: "center" }}>
                                    {item.itineraries[1].duration}
                                  </p>
                                </Col>

                                <Col span={5}>
                                  <p
                                    className={styles.arrivalTime}
                                  >{`${String(new Date(
                                    item.itineraries[1].segments[0].segmentArrival.at
                                  ).getHours()).padStart(2, "0")}:${String(new Date(
                                    item.itineraries[1].segments[0].segmentArrival.at
                                  ).getMinutes()).padStart(2, "0")}`}</p>
                                  <p className={styles.locationCode}>
                                    {
                                      item.itineraries[1].segments[item.itineraries[1].segments.length - 1]
                                        .segmentArrival.airport.iataCode
                                    }
                                  </p>
                                </Col>

                                <Col span={4}>Economy</Col>
                              </Row>
                            </Col>

                            <Col style={{ display: "flex" }} span={4}>
                              <p className={styles.fetchOutput}>
                                {parseFloat(item.price.total).toLocaleString(
                                  "en-NG",
                                  {
                                    style: "currency",
                                    currency: "NGN",
                                  }
                                )}
                              </p>
                            </Col>
                          </Row>
                          <Tabs defaultActiveKey="2" className="mt-5">
                            <TabPane
                              onChange={handleEvent}
                              tab={
                                <span>
                                  {" "}
                                  <Image src={flightTo} alt={""} /> Flight
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
                          </Tabs>
                        </Card>
                      </List.Item>
                    )}
                    gutter={4}
                  ></List>
                  <div className={styles.bookingSummarySubmenu}>
                    <p>Flight Details</p>
                  </div>
                </div>
                {/*  */}
                <div>
                  <p style={{ color: "#0043a4", marginTop: "1rem" }}>
                    {" "}
                    Travellers Details
                  </p>
                </div>
                {/* Load travelers form entry by iteration */}
                <Form form={travelerForm} autoComplete="off">
                  {setSelectedFlightOffer.travelerPricings.map(
                    (traveler, index) => (
                      <Card 
                        key={''}
                        title={
                          traveler.travelerId == 1
                            ? `Passenger ${traveler.travelerId} ${traveler.travelerType} - (Primary Contact)`
                            : `Passenger ${traveler.travelerId} (${traveler.travelerType})`
                        }
                        className="ant-card-head-custom mt-5"
                        extra={
                          <small style={{ color: "orange" }}>Protected</small>
                        }
                      >
                        <Card className="ant-card-body-custom" type="inner">
                          <div className="container">
                            <div className="row">
                              {/* Traveler Title */}
                              <div className="col-sm-12 col-md-6">
                                <div className={styles.inputNameField}>
                                  <Row>
                                    <Col span={6}>
                                      <Form.Item
                                        name={`travelerTitle${traveler.travelerId}`}
                                      >
                                        <Select
                                          defaultValue="Title"
                                          // style={{
                                          //   width: "30%",
                                          //   display: "flex",
                                          //   justifyContent: "start",
                                          // }}
                                          placeholder="Title"
                                          name={`travelerTitle${traveler.travelerId}`}
                                        >
                                          <Option value="Mr">Mr</Option>
                                          <Option value="Mrs">Mrs</Option>
                                          <Option value="Ms">Miss</Option>
                                          <Option value="Master">Master</Option>
                                          <Option value="Dr">Dr</Option>
                                          <Option value="Sir">Sir</Option>
                                          <Option value="Chief">Chief</Option>
                                          <Option value="Alh">Alh</Option>
                                          <Option value="Sen">Sen</Option>
                                          <Option value="Pst">Pst</Option>
                                          <Option value="HRH">HRH</Option>
                                        </Select>
                                      </Form.Item>
                                    </Col>
                                    <Col span={18}>
                                      <Form.Item
                                        name={`travelerSurName${traveler.travelerId}`}
                                        noStyle={true}
                                      >
                                        <Input
                                          style={{
                                            height: "100%"
                                          }}
                                          defaultValue=""
                                          placeholder="Enter Surname"
                                          name={`travelerSurName${traveler.travelerId}`}
                                          className="ant-form-item-custom"
                                        />
                                      </Form.Item>
                                    </Col>
                                  </Row>
                                </div>
                              </div>

                              {/* Traveler First Name */}
                              <div className="col-sm-12 col-md-6">
                                <div className={styles.inputNameField}>
                                  <Form.Item
                                    name={`travelerFirstName${traveler.travelerId}`}
                                  >
                                    <Input
                                      className={styles.inputAntd}
                                      placeholder="Enter First Name"
                                      name={`travelerFirstName${traveler.travelerId}`}
                                      prefix={
                                        <UserOutlined
                                          style={{
                                            color: "#0095ff",
                                            paddingRight: "1rem",
                                          }}
                                        />
                                      }
                                      suffix={
                                        <Tooltip title="Field is required">
                                          <InfoCircleOutlined
                                            style={{ color: "rgba(0,0,0,.45)" }}
                                          />
                                        </Tooltip>
                                      }
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="row">
                                {/* Traveler Middle Name */}
                                <div className="col-sm-12 col-md-6">
                                  <div className={styles.inputNameField}>
                                    <Form.Item
                                      name={`travelerMiddleName${traveler.travelerId}`}
                                    >
                                      <Input
                                        className={styles.inputAntd}
                                        placeholder="Enter Middle Name"
                                        name={`travelerMiddleName${traveler.travelerId}`}
                                        prefix={
                                          <UserOutlined
                                            style={{
                                              color: "#0095ff",
                                              paddingRight: "1rem",
                                            }}
                                          />
                                        }
                                        suffix={
                                          <Tooltip title="Field is required">
                                            <InfoCircleOutlined
                                              style={{
                                                color: "rgba(0,0,0,.45)",
                                              }}
                                            />
                                          </Tooltip>
                                        }
                                      />
                                    </Form.Item>
                                  </div>
                                </div>

                                {/* Traveler Country */}
                                <div className="col-sm-12 col-md-3">
                                  <div className={styles.inputNameField}>
                                    <Form.Item
                                      name={`travelerCountry${traveler.travelerId}`}
                                    >
                                      <Select
                                        defaultValue="Country"
                                        style={{ width: "100%" }}
                                        onChange={handleChange}
                                        name={`travelerCountry${traveler.travelerId}`}
                                      >
                                        {countries.map((country, index) => (
                                          <Option
                                            value={country.name}
                                            key={index}
                                          >
                                            {country.name}
                                          </Option>
                                        ))}
                                      </Select>
                                    </Form.Item>
                                  </div>
                                </div>

                                {/* Traveler Gender */}
                                <div className="col-sm-12 col-md-3">
                                  <div className={styles.inputNameField}>
                                    <Form.Item
                                      name={`travelerGender${traveler.travelerId}`}
                                    >
                                      <Select
                                        defaultValue="Gender"
                                        style={{ width: "100%" }}
                                        onChange={handleChange}
                                        name={`travelerGender${traveler.travelerId}`}
                                      >
                                        <Option value={1}>Male</Option>
                                        <Option value={0}>Female</Option>
                                      </Select>
                                    </Form.Item>
                                  </div>
                                </div>
                              </div>

                              {/* Date of Birth */}
                              <div className="row mt-5">
                                <div className="col-sm-12 col-md-6">
                                  <div className="row">
                                    {/* <div className="col-sm-12 col-md-12"> */}
                                    {/* Year of Birth */}
                                    <div className="col-4">
                                      <div className={styles.inputNameField}>
                                        <Form.Item
                                          name={`travelerYearOfBirth${traveler.travelerId}`}
                                        >
                                          <Select
                                            defaultValue="Year"
                                            style={{ width: "100%" }}
                                            onChange={handleChange}
                                            name={`travelerYearOfBirth${traveler.travelerId}`}
                                          >
                                            {years.map((year, index) => (
                                              <Option
                                                value={year.number}
                                                key={index}
                                              >
                                                {year.number}
                                              </Option>
                                            ))}
                                          </Select>
                                        </Form.Item>
                                      </div>
                                    </div>

                                    {/* Month of Birth */}
                                    <div className="col-5">
                                      <div className={styles.inputNameField}>
                                        <Form.Item
                                          name={`travelerMonthOBirth${traveler.travelerId}`}
                                        >
                                          <Select
                                            defaultValue=" Month"
                                            style={{ width: "100%" }}
                                            onChange={handleChange}
                                            name={`travelerMonthOBirth${traveler.travelerId}`}
                                          >
                                            {months.map((months, index) => (
                                              <Option
                                                value={months.value}
                                                key={index}
                                              >
                                                {months.name}
                                              </Option>
                                            ))}
                                          </Select>
                                        </Form.Item>
                                      </div>
                                    </div>
                                    {/* Day of Birth */}
                                    <div className="col-3">
                                      <div className={styles.inputNameField}>
                                        <Form.Item
                                          name={`travelerDayOfBirth${traveler.travelerId}`}
                                        >
                                          <Select
                                            defaultValue="Day"
                                            style={{ width: "100%" }}
                                            onChange={handleChange}
                                            name={`travelerDayOfBirth${traveler.travelerId}`}
                                          >
                                            {days.map((day, index) => (
                                              <Option
                                                value={day.number}
                                                key={index}
                                              >
                                                {day.number}
                                              </Option>
                                            ))}
                                          </Select>
                                        </Form.Item>
                                      </div>
                                    </div>
                                    {/* </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Card>
                    )
                  )}

                  <Card
                    title="Contact Information"
                    className="ant-card-head-custom mt-5"
                    extra={
                      <small style={{ color: "rgba(252, 166, 43, 0.5)" }}>
                        Protected
                      </small>
                    }
                  >
                    <Card className="ant-card-body-custom" type="inner">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className={styles.inputNameField}>
                              <Form.Item name="email">
                                <Input
                                  style={{
                                    width: "100%",
                                    height: "2.5rem",
                                    border: "none",
                                  }}
                                  placeholder="Enter Email"
                                  name="email"
                                />
                              </Form.Item>
                            </div>
                          </div>
                          {/* *********************************** */}
                          <div className="col-sm-12 col-md-6">
                            <div className={styles.inputNameField}>
                              <Form.Item name="phone">
                                <Input
                                  name="phone"
                                  className={styles.inputAntd}
                                  placeholder="Enter Mobile Number"
                                  prefix={
                                    <UserOutlined
                                      style={{
                                        color: "#0095ff",
                                        paddingRight: "1rem",
                                      }}
                                    />
                                  }
                                  suffix={
                                    <Tooltip title="Field is required">
                                      <InfoCircleOutlined
                                        style={{ color: "rgba(0,0,0,.45)" }}
                                      />
                                    </Tooltip>
                                  }
                                />
                              </Form.Item>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Card>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-12"></div>
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="accordionSection mb-3">
                <Accordion />
              </div>
              <div className="mb-5">
                <div className={styles.termsCondition}>
                  <Checkbox onChange={onChange}>
                    {" "}
                    I agree to 247travels flight{" "}
                    <span onClick={showModal} style={{ color: "orange" }}>
                      terms &amp; condition{" "}
                    </span>
                  </Checkbox>
                  <Button
                    style={{
                      backgroundColor: "#0043a4",
                      padding: "0.5rem",
                    }}
                    onClick={async () => {
                      // Display dialog
                      setFlightOrderInitializationModelVisibility(true);
                      // Send the request
                      await initializeFlightOrder(
                        travelerForm.getFieldsValue(),
                        setSelectedFlightOffer.travelerPricings,
                        setSelectedFlightOffer.id

                      ).then((result) => {
                        console.log('Initialized Flight Order:', result);
                        if (result.data.successful) {
                          window.localStorage.setItem(
                            "customerId",
                            result.data.response.customerId
                          );
                          window.localStorage.setItem(
                            "flightOrderId",
                            result.data.response.flightOrderId);
                          router.push('/payment');
                        }
                        else {
                          // Display error...
                          displayError('Error', 'Your payment could not be processed due to an error');
                        }
                      })
                        .catch(error => {
                          // Log the error
                          console.error('Payment Initialize Error:', error);
                          // Display error
                          displayError('Error', 'Your payment could not be processed due to an error');
                        });
                    }}
                  >
                    Continue
                  </Button>
                  {/* </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal title="Terms &amp; Conditions" 
             visible={isShowModal} 
             onOk={handleOk} 
             onCancel={handleCancel} 
             width={1000} 
             className="termsCondition"
      >
        <p>1. Cancellation and Date Change penalty applicable. Penalty amount will depend on the Date and Time of Cancellation or Date Change.</p>
        <p>2. All booking/reservations made on 247Travels.com are subject to third party operating Airline&apos;s rules and terms of carriage.</p>
        <p>3. 247Travels merely acts as a travel agent of third party operating Airlines and SHALL have NO responsibility, whatsoever, for any additional cost (directly or indirectly) incurred by any passenger due to any delay, loss, cancellation, change, inaccurate/insufficient information arising whether during booking reservation or after ticket issuance.</p>
        <p>4. All the Arik Air flight bookings/reservations are subject to airline availability and are valid for 1 (one) hour from time of booking to payment confirmation and ticket issuance.</p>
        <p>5. All flight fare quoted on www.live.247travels.com are subject to availability, and to change at any time by the third party Airline operators</p>
        <p>6. Passengers are liable for; all card transactions (whether successful or not) travel details, compliance and adequacy of visa requirements, travel itinerary and names (as appear on passport) provided for bookings</p>
        <p>7. Ticket issuance SHALL BE subject to payment confirmation by 247Travels.</p>
        <p>8. Please ensure that your International passport has at least 6 (six) months validity prior to its expiration date as 247Travels shall not be liable for any default.</p>
        <p>9. For all non-card transactions, please contact us at 0705 7000 247 to confirm booking details, travel dates and travel requirements before proceeding to payment.</p>
        <p>10. Refund, cancellation and change requests, where applicable, are subject to third party operating airline&apos;s policy, plus a service charge of $50</p>
        <p>11. Refund settlement in 9 above, shall be pursuant to fund remittance by the operating airline</p>
        <p>12. Passengers are advised to arrive at the airport at least 3-5 hours prior to flight departure.</p>
        <p>13. First time travelers are advised to have a return flight ticket, confirmed hotel/accommodation and a minimum of $1000 for Personal Travel Allowance (PTA) or Business Travel Allowance (BTA).</p>
        <p>14. An original child&apos;s Birth Certificate and Consent letter from parent(s) must be presented before the check-in counter at the Airport.</p>
        <p>15. All tickets are non-transferable at any time. Some tickets may be non-refundable or non-changeable.</p>
        <p>16. Some Airlines may require additional Medical Report/Documents in the case of pregnant passenger(s).</p>
        <p>17. The Passenger hereby confirms to have read and understood this booking information notice and has agreed to waive all rights, by law and to hold harmless and absolve 247Travels of all liabilities that may arise thereof.</p>
        
      </Modal>

      <Modal
        onCancel={() => setFlightOrderInitializationModelVisibility(false)}
        centered
        visible={flightOrderInitializationModelVisibility}
        style={{ color: "#fff" }}
        width="auto"
        keyboard={false}
        footer={null}
        className="loadFlightModal"
        bodyStyle={{ backgroundColor: "#0043a4", padding: "2rem" }}
      >
        <p className="flightModalTitle">Submitting your details</p>
      </Modal>

      <ToastComponent ref={toastInstance} animation={{ show: { effect: 'SlideLeftIn', duration: 300, easing: 'linear' }, hide: { effect: 'SlideLeftOut', duration: 300, easing: 'linear' } }} />
    </>
  );
};

export default Flight_match;

// const FlightBaseFare = (props) => {
//   return (
//     <>
//       <div className="airline-link-price mt-3">
//         <div className="flight-checkbox d-flex ">
//           <p className="checkbox-paragraph">{props.airline}</p>
//         </div>
//         <div className="">
//           <p className="price-list-p"> {props.price}</p>
//         </div>
//       </div>
//     </>
//   );
// };

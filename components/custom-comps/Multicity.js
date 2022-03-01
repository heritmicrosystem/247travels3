import React, { useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { Form as FormAnt } from "antd";
import { DatePicker, Input, List, Card } from "antd";
import {Menu, Button, Dropdown as DropdownAnt } from "antd";
import { DownOutlined } from "@ant-design/icons";
import moment from "moment";

import Image from "next/image";
import Link from "next/link";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import { DropdownButton } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import flightFrom from "../../public/icons/flight-from.webp";
import flightTo from "../../public/icons/flight-to_.webp";
import calenderIcon from "../../public/icons/calender.webp";
import flightClass from "../../public/icons/flight-class.webp";
import babyIcon from "../../public/icons/Infant.webp";
import childrenIcon from "../../public/icons/children.webp";
import adultIcon from "../../public/icons/adult.webp";

import PlusMinusButton from "../PlusMinusButton";

const Multicity = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        Economy
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        Premium Economy
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        Business Class
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        First Class
      </Menu.Item>
    </Menu>
  );

    //#region States

    const [airportsFilterResult, setAirportsFilterResult] = useState([]);

    // create hook for Destination Airport Filter
    const [destinationAirportsFilter, setDestinationAirportsFilter] = useState([]);
  
    //#endregion
  
    //#region Hooks
  
    const takeOffInput = useRef();
  
    // create hook for Destination Input
    const destinationInput = useRef();
  
    const airports = useSelector((state) => state.store.airports);
  
    //#endregion

    function range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    }
    
    function departureDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    }
    function returnDate(departureDate) {
      // Can not select days before today and today
      return departureDate && departureDate < moment().endOf(departureDate);
    }


    
  return (
    <>
      {/* flight destination div -- below */}
      <div className="flightdestination-div">
        <div className="container">
          <div className="row">
          <div className="col-md-3">
              <div className="flight mt-3 mb-5" style={{position: "relative"}}>
                <div className="flight-booking-index">
                  <div className="flight-booking-icon">
                    <Image src={flightFrom} alt={"flight-from-icon"} />
                  </div>
                  {/* <FormControl
                    className="form-basic-booking"
                    type="text"
                    placeholder="Flight From"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  /> */}
                  {/* Start of input control */}
                  <>
                    <Input
                      placeholder="Specify Take Off Location"
                      allowClear={true}
                      ref={takeOffInput}
                      onChange={(e) => {
                        // Filter by email or phone number Phone: 07067543214 Email: joy.oamen@xownsolutions.com

                        let value = e.currentTarget.value;

                        // If the field has no value...
                        if (!value) {
                          // Set empty search result
                          setAirportsFilterResult([]);
                          // Set selectedCustomer to null
                          // because 'user' is not specified
                          // as a result of the empty field
                          // setSelectedCustomer(null);
                          // Set customerSelectionError to true
                          // so that the field will not be validated
                          // if user has not selected a customer
                          // setCustomerSelectionError(true);

                          // Exit the function
                          return;
                        }

                        var airport = airports.filter(
                          (p) =>
                            p.name.includes(value) ||
                            p.iataCode.includes(value)
                        );

                        if (airport.length < 0) {
                          setAirportsFilterResult([]);
                          console.log(
                            "Airport Result:",
                            "Airport not found!"
                          );
                        } else {
                          console.log("Airport Result:", airport);
                          setAirportsFilterResult(airport);
                        }
                      }}
                      onBlur={(e) => {
                        if (takeOffInput.current.state.value !== null) {
                          return;
                        }
                        // TODO: Why this if?
                        if (customerSelectionError) {
                          // Clear the input
                          takeOffInput.current.state.value = null;
                          // Empty the result collection
                          setCustomerResult([]);
                        }
                        // setTimeout(() => {

                        // }, 5000);
                      }}
                    />
                    {/* <div
                      role="alert"
                      className="ant-form-item-explain-error"
                      style={{
                        display: customerSelectionError ? "block" : "none",
                      }}
                    >
                      Please choose a customer or choose{" "}
                      <strong>'Unknown'</strong> for an unregistered customer
                    </div> */}
                    
                  </>
                  {/* End of input control */}
                </div>
                {airportsFilterResult.length !== 0 ? (
                      <>
                        <List
                          dataSource={airportsFilterResult}
                          renderItem={(item) => (
                            <List.Item
                              key={item.id}
                              style={{ padding: "0", borderBottom: "none" }}
                              onClick={() => {
                                
                                // Set selected customer
                                // setSelectedCustomer(item);
                                let airport = item;
                                takeOffInput.current.state.value = `${airport.name} (${airport.iataCode})`;
                                console.log(airport);
                                setAirportsFilterResult([]);
                              }}
                            >
                              <Card size="small" style={{ width: "100%" }}>
                                <Card.Grid
                                  style={{
                                    width: "100%",
                                    cursor: "pointer",
                                    padding: "12px",
                                  }}
                                >
                                  <List.Item.Meta
                                    title={
                                      <span>
                                        <strong>{`${item.name} (${item.iataCode})`}</strong>
                                      </span>
                                    }
                                  />
                                  {/* <div>Content</div> */}
                                </Card.Grid>
                              </Card>
                            </List.Item>
                          )}
                          style={{ maxHeight: "250px", overflowY: "auto", width: '100%', position:"absolute",zIndex:1 }}
                        ></List>
                      </>
                    ) : (
                      <></>
                    )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="flight mt-3 mb-5" style = {{position: "relative"}}>
                <div className="flight-booking-index">
                  <div className="flight-booking-icon">
                    <Image src={flightTo} alt={"flight-to-icon"} />
                  </div>
                  
                  {/* <FormControl
                    className="form-basic-booking"
                    type="text"
                    placeholder="Flight To"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  /> */}
                  {/* Start of input control will */}
                  <>
                    <Input
                      placeholder="Specify Take Off Location"
                      allowClear={true}
                      ref={destinationInput}
                      onChange={(e) => {
                        // Filter by email or phone number Phone: 07067543214 Email: joy.oamen@xownsolutions.com

                        let value = e.currentTarget.value;

                        // If the field has no value...
                        if (!value) {
                          // Set empty search result
                          setDestinationAirportsFilter([]);
                          // Set selectedCustomer to null
                          // because 'user' is not specified
                          // as a result of the empty field
                          // setSelectedCustomer(null);
                          // Set customerSelectionError to true
                          // so that the field will not be validated
                          // if user has not selected a customer
                          // setCustomerSelectionError(true);

                          // Exit the function
                          return;
                        }

                        var airport = airports.filter(
                          (p) =>
                            p.name.includes(value) ||
                            p.iataCode.includes(value)
                        );

                        if (airport.length < 0) {
                          setDestinationAirportsFilter([]);
                          console.log(
                            "Airport Result:",
                            "Airport not found!"
                          );
                        } else {
                          console.log("Airport Result:", airport);
                          setDestinationAirportsFilter(airport);
                        }
                      }}
                      onBlur={(e) => {
                        if (destinationInput.current.state.value !== null) {
                          return;
                        }
                        // TODO: Why this if?
                        if (customerSelectionError) {
                          // Clear the input
                          destinationInput.current.state.value = null;
                          // Empty the result collection
                          setCustomerResult([]);
                        }
                        // setTimeout(() => {

                        // }, 5000);
                      }}
                    />
                    {/* <div
                      role="alert"
                      className="ant-form-item-explain-error"
                      style={{
                        display: customerSelectionError ? "block" : "none",
                      }}
                    >
                      Please choose a customer or choose{" "}
                      <strong>'Unknown'</strong> for an unregistered customer
                    </div> */}
                    
                  </>
                  {/* End of input control */}
                </div>
                {destinationAirportsFilter.length !== 0 ? (
                      <>
                        <List
                          dataSource={destinationAirportsFilter}
                          renderItem={(item) => (
                            <List.Item
                              key={item.id}
                              style={{ padding: "0", borderBottom: "none" }}
                              onClick={() => {
                                
                                // Set selected customer
                                // setSelectedCustomer(item);
                                let airport = item;
                                destinationInput.current.state.value = `${airport.name} (${airport.iataCode})`;
                                console.log(airport);
                                setDestinationAirportsFilter([]);
                              }}
                            >
                              <Card size="small" style={{ width: "100%" }}>
                                <Card.Grid
                                  style={{
                                    width: "100%",
                                    cursor: "pointer",
                                    padding: "12px",
                                  }}
                                >
                                  <List.Item.Meta
                                    title={
                                      <span>
                                        <strong>{`${item.name} (${item.iataCode})`}</strong>
                                      </span>
                                    }
                                  />
                                  {/* <div>Content</div> */}
                                </Card.Grid>
                              </Card>
                            </List.Item>
                          )}
                          style={{ maxHeight: "250px", overflowY: "auto", width: '100%', position:"absolute",zIndex:1 }}
                        ></List>
                      </>
                    ) : (
                      <></>
                    )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="flight mt-3 mb-5">
                <div className="flight-booking-index">
                  <div className="flight-booking-icon">
                    <Image src={calenderIcon} alt={"calender-icon"} />
                  </div>
                  <FormAnt.Item>
                    <DatePicker 
                    disabledDate={departureDate} />
                  </FormAnt.Item>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="col-md-3">
              <div className="flight mt-3 mb-5">
                <div className="flight-booking-index">
                  <div className="flight-booking-icon">
                    <Image src={calenderIcon} alt={"calender-icon"} />
                  </div>
                  <FormAnt.Item>
                    <DatePicker
                    disabledDate={returnDate} />
                  </FormAnt.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* flight destination div -- below */}
      <div className="passengerInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="flight">
                {/*  */}
                {/* <InputGroup className="textfield-menu">
                  <InputGroup.Text id="btnGroupAddon dropdown-menu-align-end custom-travel-drop">
                    <Image src={flightClass} alt={"flight-from-icon"} />
                  </InputGroup.Text>
                  <DropdownButton
                    align="end"
                    id="dropdown-menu-align-end custom"
                    title="Flight Class"
                    className="dropdowm-travel-custom"
                  >
                    <Dropdown.Item eventkey="1" href="#/action-1">
                      Economy
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventkey="2" href="#/action-2">
                      Premium Economy
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventkey="3" href="#/action-3">
                      Business Class
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventkey="4" href="#/action-4">
                      First Class
                    </Dropdown.Item>
                  </DropdownButton>
                </InputGroup> */}
                {/*  */}
                <div className="flight-booking-index">
                  <div className="flight-booking-icon">
                    <Image src={flightClass} alt={"flight-from-icon"} />
                  </div>
                  <DropdownAnt overlay={menu}>
                    <Button>
                      Flight Class <DownOutlined />
                    </Button>
                  </DropdownAnt>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flight">
                <div className="passenger-index">
                  <div className="passenger-icon">
                    <Image src={adultIcon} alt={"adult-icon"} />
                  </div>
                  <div className="passenger-content">
                    <div>
                      <div>Adult</div>
                      <small>12+ Years</small>
                    </div>
                    <PlusMinusButton defaultValue={1} maxAdult={5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flight">
                <div className="passenger-index">
                  <div className="passenger-icon">
                    <Image src={childrenIcon} alt={"children-icon"} />
                  </div>
                  <div className="passenger-content">
                    <div>
                      <div>Children </div>
                      <small>2-11 Years</small>
                    </div>
                    <PlusMinusButton defaultValue={0} maxAdult={5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flight">
                <div className="passenger-index">
                  <div className="passenger-icon">
                    <Image src={babyIcon} alt={"infant-icon"} />
                  </div>
                  <div className="passenger-content">
                    <div>
                      <div>Infant </div>
                      <small> 0-2Years </small>
                    </div>
                    <PlusMinusButton defaultValue={0} maxAdult={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********* */}
      <div className="flightsearch-btn mt-5 mb-3">
        <div className="container">
          <div className="addflight-div">
            <div className="directflight-indicate">
              <div className="flight-checkbox d-flex ">
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check
                    className="form-checkbox-custom"
                    type="checkbox"
                  />
                </Form.Group>
                <p className="checkbox-paragraph"> Direct Flight Only</p>
                <div className="btn addflight-btn">Add Flight</div>
              </div>
            </div>
            <div className="btn search-btn"><Link href="/flight-match">Search</Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multicity;

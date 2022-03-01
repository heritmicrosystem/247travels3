import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Form as FormAnt } from "antd";
import { DatePicker } from "antd";
import {
  Menu,
  Button,
  Dropdown as DropdownAnt,
  List,
  Card,
  Input,
  Select,
  InputNumber,
  Modal,
  Spin,
  Checkbox,
} from "antd";
import Image from "next/image";
import aeroplaneImg from "../../public/aeroplane.png";
import Form from "react-bootstrap/Form";
import flightFrom from "../../public/icons/flight-from.webp";
import flightTo from "../../public/icons/flight-to_.webp";
import calenderIcon from "../../public/icons/calender.webp";
import flightClass from "../../public/icons/flight-class.webp";
import babyIcon from "../../public/icons/Infant.webp";
import childrenIcon from "../../public/icons/children.webp";
import adultIcon from "../../public/icons/adult.webp";
import PlusMinusButton from "../PlusMinusButton";
import moment from "moment";

const { Option } = Select;

const Oneway = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Economy</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Premium Economy</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Business Class</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">First Class</Menu.Item>
    </Menu>
  );

  //#region States

  const airports = useSelector((state) => state.store.airports);

  //#endregion

  // function range(start, end) {
  //   const result = [];
  //   for (let i = start; i < end; i++) {
  //     result.push(i);
  //   }
  //   return result;
  // }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const [isShow, setIsShow] = useState(false);

  const handleOk = () => {
   setIsShow(false);
 };
 
 const handleCancel = () => {
   setIsShow(false);
 };
 
  // *************************** FLIGHT TAKEOFF & DEPARTURE **************************************


  // Flight TakeOffInput
  function onOriginLocationSelected(originLocation) {
    console.log(originLocation.itemData);
    flightSearchForm.setFieldsValue({
      takeOffAirport: originLocation.itemData.iataCode,
    });
    flightSearchForm.setFieldsValue({
      originLocationCityCode: `${originLocation.itemData.city} (${originLocation.itemData.iataCode})`,
    });
  }
  // Flight Departure
  function onDestinationLocationSelected(originLocation) {
    console.log(originLocation.itemData);
    flightSearchForm.setFieldsValue({
      destinationAirport: originLocation.itemData.iataCode,
    });
    flightSearchForm.setFieldsValue({
      originDestinationCityCode: `${originLocation.itemData.city} (${originLocation.itemData.iataCode})`,
    });
  }
  
  // *************************** CALENDER SECTION **********************************

  // Edit Calender
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment();
  }

  // *********************************************************************************

  // Hook for TakeOff Input
  const takeOffInput = useRef();

  // create hook for Destination Input
  const destinationInput = useRef();

  // Create Hook to hold passenger data in state
  const [flightSearchForm] = FormAnt.useForm();

  // Create Hook to hold Airport takeoff & departure Search Filter Result
  const [takeOffAirportsFilterResult, setTakeOffAirportsFilterResult] =
    useState([]);

  const [destinationAirportsFilterResult, setDestinationAirportsFilterResult] =
    useState([]);


  // Flight search processing modal visibility state
  const [
    flightSearchProcessingModalVisibility,
    setFlightSearchProcessingModalVisibility,
  ] = useState(false);

  // Flight search error
  const [
    flightSearchErrorModalVisibility,
    setFlightSearchErrorModalVisibility,
  ] = useState(false);


  // *************************** PASSENGER SECTION **********************************

  // PlusMinus Button functionality
  const [adultNumValue, setAdultNumValue] = useState(1);
  const [childrenNumValue, setChildrenNumValue] = useState(0);
  const [infantsNumValue, setInfantsNumValue] = useState(0);

  const adultMinValue = 1;
  const childrenMinValue = 0;
  const infantsMinValue = 0;

  // function for increasing/decreasing AdulutValue Form ||
  function increaseAdultNum() {
    setAdultNumValue(++adultNumValue);
    // Update the Form Value
    flightSearchForm.setFieldsValue({ numberOfAdults: adultNumValue });
  }

  // function for decreasing AdultNum
  function decreaseAdultNum() {
    if (adultNumValue <= adultMinValue) {
      return;
    }
    setAdultNumValue(--adultNumValue);
    // Update the Form value
    flightSearchForm.setFieldsValue({ numberOfAdults: adultNumValue });
    console.log("print", adultNumValue);
  }

  // function for increasing/decreasing ChildrenValue Form ||
  function increaseChildrenNum() {
    setChildrenNumValue(++childrenNumValue);
    // Update the Form Value
    flightSearchForm.setFieldsValue({ numberOfChildren: childrenNumValue });
  }

  // function for decreasing ChildrenNum
  function decreaseChildrenNum() {
    if (childrenNumValue <= childrenMinValue) {
      return;
    }
    setChildrenNumValue(--childrenNumValue);
    // Update the Form Value
    flightSearchForm.setFieldsValue({ numberOfChildren: childrenNumValue });
    console.log("print", childrenNumValue);
  }

  // function for increasing/decreasing InfantValue Form ||
  function increaseInfantsNum() {
    setInfantsNumValue(++infantsNumValue);
    // Update the Form ValueElement
    flightSearchForm.setFieldsValue({ numberOfInfants: infantsNumValue });
  }
  // function for decreasing InfantNum
  function decreaseInfantsNum() {
    if (infantsNumValue <= infantsMinValue) {
      return;
    }
    setInfantsNumValue(--infantsNumValue);
    // Update the Form Value
    flightSearchForm.setFieldsValue({ numberOfInfants: infantsNumValue });
    console.log("print", infantsNumValue);
  }

  // *********************** FILTER FLIGHT SEARCH ******************************
  async function filterLocation(value) {
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    await sleep(1000).then(() => {
      console.log("Completed");
    });
    var matches = [];
    if (value.length === 3) {
      // First filter for iataCode...
      matches = airports.filter((p) =>
        p.iataCode.toLowerCase().includes(value.toLocaleLowerCase())
      );
      // Then filter for others...
      var otherMatches = airports.filter(
        (p) =>
          p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          p.city.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          p.country.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      otherMatches.forEach((match) => {
        matches.push(match);
      });
    } else {
      matches = airports.filter(
        (p) =>
          p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          p.city.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          p.country.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
    return matches;
  }

  // *****************************************************************************
  return (
    <>
      <FormAnt form={flightSearchForm} autoComplete="off">
        {/* flight destination div -- below */}
        <div className="flightdestination-div">
          <div className="container">
            <div className="row">
              {/* Take Off Airport Selection */}
              <div className="col-md-4">
                <div className="flight mt-3" style={{ position: "relative" }}>
                  {/* AIRPORT INPUT CONTAINER  */}
                  <div className="flight-booking-index">
                    <div className="flight-booking-icon">
                      <Image src={flightFrom} alt={"flight-from-icon"} />
                    </div>

                    {/* Start of input control */}
                    <FormAnt.Item hidden={true} name="originLocationCityCode">
                      <Input name="originLocationCityCode" />
                    </FormAnt.Item>

                    <Input
                      placeholder="Specify Take Off Location"
                      allowClear={true}
                      ref={takeOffInput}
                      name="selectedTakeOffAirport"
                      onChange={async (e) => {
                        let value = e.currentTarget.value;

                        // If the field has no value...
                        if (!value || value.length < 3) {
                          // Set empty search result
                          setTakeOffAirportsFilterResult([]);
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
                        var filteredAirports = [];
                        var matches = await filterLocation(value);

                        matches.forEach((match) => {
                          filteredAirports.push(match);
                        });

                        if (filteredAirports.length === 0) {
                          console.log("Airport Result:", "Airport not found!");
                          setTakeOffAirportsFilterResult(filteredAirports);
                        } else {
                          console.log("Airport Result:", filteredAirports);
                          setTakeOffAirportsFilterResult(filteredAirports);
                        }
                      }}
                      onBlur={(e) => {
                        if (takeOffInput.current.state.value !== null) {
                          return;
                        }
                        // TODO: Why this if?
                        // if (customerSelectionError) {
                        // Clear the input
                        // takeOffInput.current.state.value = null;
                        // Empty the result collection
                        // }
                        // setTimeout(() => {
                        // }, 5000);
                        setTakeOffAirportsFilterResult([]);
                      }}
                    />
                    {/* End of input control */}
                  </div>
                  {/* AIRPORT RESULT AND DROPDOWN */}
                  {takeOffAirportsFilterResult.length !== 0 ? (
                    <>
                      <List
                        className="filterOriginList"
                        dataSource={takeOffAirportsFilterResult}
                        renderItem={(item) => (
                          <List.Item
                            key={item.id}
                            style={{ padding: "0", borderBottom: "none" }}
                            onClick={() => {
                              // Set selected customer
                              // setSelectedCustomer(item);
                              let airport = item;
                              takeOffInput.current.state.value = `${airport.name} (${airport.iataCode})`;
                              flightSearchForm.setFieldsValue({
                                originLocationCityCode: `${airport.iataCode}`,
                              });
                              console.log(airport);
                              setTakeOffAirportsFilterResult([]);
                            }}
                          >
                            <Card size="small" style={{ width: "100%" }}>
                              <Card.Grid
                                style={{
                                  width: "100%",
                                  cursor: "pointer",
                                  padding: "12px",
                                  textAlign: "left",
                                  position: "relative",
                                }}
                              >
                                <div>{`${item.city}, ${item.country}`}</div>
                                <small>{`${item.name} (${item.iataCode})`}</small>
                                <div
                                  style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "30%",
                                    marginRight: "12px",
                                    fontWeight: "500",
                                    border: "1px solid #0a0a0a",
                                    padding: "2px 5px",
                                    lineHeight: "1.5",
                                    borderRadius: "8px",
                                  }}
                                >
                                  {`${item.iataCode.toUpperCase()}`}
                                </div>
                              </Card.Grid>
                            </Card>
                          </List.Item>
                        )}
                        style={{
                          maxHeight: "250px",
                          overflowY: "auto",
                          width: "100%",
                          position: "absolute",
                          zIndex: 1,
                        }}
                      ></List>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {/* Destination Airport Selection */}
              <div className="col-md-4">
                <div className="flight mt-3" style={{ position: "relative" }}>
                  {/* DEPARTURE INPUT SOURCE */}
                  <div className="flight-booking-index">
                    <div className="flight-booking-icon">
                      <Image src={flightTo} alt={"flight-to-icon"} />
                    </div>

                    <FormAnt.Item
                      hidden={true}
                      name="originDestinationCityCode"
                    >
                      <Input name="originDestinationCityCode" />
                    </FormAnt.Item>

                    <Input
                      placeholder="Specify Destination Location"
                      allowClear={true}
                      ref={destinationInput}
                      name="selectedTakeOffAirport"
                      onChange={async (e) => {
                        let value = e.currentTarget.value;

                        // If the field has no value...
                        if (!value || value.length < 3) {
                          // Set empty search result
                          setDestinationAirportsFilterResult([]);
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
                        var filteredAirports = [];
                        var matches = await filterLocation(value);

                        matches.forEach((match) => {
                          filteredAirports.push(match);
                        });
                        if (filteredAirports.length === 0) {
                          console.log("Airport Result:", "Airport not found!");
                          setDestinationAirportsFilterResult(filteredAirports);
                        } else {
                          console.log("Airport Result:", filteredAirports);
                          setDestinationAirportsFilterResult(filteredAirports);
                        }
                      }}
                      onBlur={(e) => {
                        if (destinationInput.current.state.value !== null) {
                          return;
                        }
                        // TODO: Why this if?
                        // if (customerSelectionError) {
                        // Clear the input
                        // destinationInput.current.state.value = null;
                        // Empty the result collection
                        // }
                        // setTimeout(() => {

                        // }, 5000);
                        setDestinationAirportsFilterResult([]);
                      }}
                    />

                    {/* End of input control */}
                  </div>
                  {/* DEPARTURE DROPDOWN RESULT */}
                  {destinationAirportsFilterResult.length !== 0 ? (
                    <>
                      <List
                        className="filterOriginList"
                        dataSource={destinationAirportsFilterResult}
                        renderItem={(item) => (
                          <List.Item
                            key={item.id}
                            style={{ padding: "0", borderBottom: "none" }}
                            onClick={() => {
                              // Set selected customer
                              // setSelectedCustomer(item);
                              let airport = item;
                              destinationInput.current.state.value = `${airport.name} (${airport.iataCode})`;
                              flightSearchForm.setFieldsValue({
                                originDestinationCityCode: `${airport.iataCode}`,
                              });

                              console.log(airport);
                              setDestinationAirportsFilterResult([]);
                            }}
                          >
                            <Card size="small" style={{ width: "100%" }}>
                              <Card.Grid
                                style={{
                                  width: "100%",
                                  cursor: "pointer",
                                  padding: "12px",
                                  textAlign: "left",
                                  position: "relative",
                                }}
                              >
                                <div>{`${item.city}, ${item.country}`}</div>
                                <small>{`${item.name} (${item.iataCode})`}</small>
                                <div
                                  style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "30%",
                                    marginRight: "12px",
                                    fontWeight: "500",
                                    border: "1px solid #0a0a0a",
                                    padding: "2px 5px",
                                    lineHeight: "1.5",
                                    borderRadius: "8px",
                                  }}
                                >
                                  {`${item.iataCode.toUpperCase()}`}
                                </div>
                              </Card.Grid>
                            </Card>
                          </List.Item>
                        )}
                        style={{
                          maxHeight: "250px",
                          overflowY: "auto",
                          width: "100%",
                          position: "absolute",
                          zIndex: 1,
                        }}
                      ></List>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="flight mt-3 mb-5">
                  <div className="flight-booking-index">
                    <div className="flight-booking-icon">
                      <Image src={calenderIcon} alt={"calender-icon"} />
                    </div>
                    <FormAnt.Item name="selectedDepartureDate">
                      <DatePicker
                        superNextIcon={null}
                        disabledDate={disabledDate}
                        onChange={() =>
                          flightSearchForm.setFieldsValue({
                            departureDate: flightSearchForm
                              .getFieldsValue()
                              .selectedDepartureDate.format("YYYY-MM-DD"),
                          })
                        }
                      />
                    </FormAnt.Item>
                    <FormAnt.Item hidden={true} name="departureDate">
                      <Input name="departureDate" />
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
                  <div className="flight-booking-index">
                    <div className="flight-booking-icon">
                      <Image src={flightClass} alt={"flight-from-icon"} />
                    </div>
                    <FormAnt.Item name="flightClass" initialValue="Economy">
                      <Select defaultValue="Economy" name="flightClass">
                        <Select.Option value="Economy">Economy</Select.Option>
                        <Select.Option value="Premium Economy">
                          Premium Economy
                        </Select.Option>
                        <Select.Option value="Business">Business</Select.Option>
                        <Select.Option value="First Class">
                          First Class
                        </Select.Option>
                      </Select>
                    </FormAnt.Item>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="flight">
                  <FormAnt.Item
                    hidden={true}
                    name="numberOfAdults"
                    initialValue={adultNumValue}
                  >
                    <InputNumber name="numberOfAdults" value={adultNumValue} />
                  </FormAnt.Item>
                  <div className="passenger-index">
                    <div className="passenger-icon">
                      <Image src={adultIcon} alt={"adult-icon"} />
                    </div>
                    <div className="passenger-content">
                      <div>
                        <div>Adult</div>
                        <small>12+ Years</small>
                      </div>
                      <PlusMinusButton
                        increaseNum={increaseAdultNum}
                        decreaseNum={decreaseAdultNum}
                        numValue={adultNumValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="flight">
                  <FormAnt.Item
                    hidden={true}
                    name="numberOfChildren"
                    initialValue={childrenNumValue}
                  >
                    <InputNumber
                      name="numberOfChildren"
                      value={childrenNumValue}
                    />
                  </FormAnt.Item>

                  <div className="passenger-index">
                    <div className="passenger-icon">
                      <Image src={childrenIcon} alt={"children-icon"} />
                    </div>
                    <div className="passenger-content">
                      <div>
                        <div>Children </div>
                        <small>2-11 Years</small>
                      </div>
                      <PlusMinusButton
                        increaseNum={increaseChildrenNum}
                        decreaseNum={decreaseChildrenNum}
                        numValue={childrenNumValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="flight">
                  <FormAnt.Item
                    hidden={true}
                    name="numberOfInfants"
                    initialValue={infantsNumValue}
                  >
                    <InputNumber name="numberOfInfants" />
                  </FormAnt.Item>
                  <div className="passenger-index">
                    <div className="passenger-icon">
                      <Image src={babyIcon} alt={"infant-icon"} />
                    </div>
                    <div className="passenger-content">
                      <div>
                        <div>Infant </div>
                        <small> 0-2Years </small>
                      </div>
                      <PlusMinusButton
                        defaultValue={0}
                        maxAdult={5}
                        increaseNum={increaseInfantsNum}
                        decreaseNum={decreaseInfantsNum}
                        numValue={infantsNumValue}
                      />
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
              {/* <div className="directflight-indicate">
                <div className="flight-checkbox d-flex ">
                  <Form.Group className="" controlId="formBasicCheckbox">
                    <Form.Check
                      className="form-checkbox-custom"
                      type="checkbox"
                    />
                  </Form.Group>
                  <p className="checkbox-paragraph"> Direct Flight Only</p>
                </div>
              </div> */}
               <div
                className="checkbox-flex-div"
                style={{ display: "flex", alignItems: "center", width: "40%" }}
              >
                <Checkbox
                  className="antd-checkbox-custom-booking"
                  onChange={onChange}
                >
                  {" "}
                  Direct Flight Only
                </Checkbox>
                
              </div>

              {/* <div className="btn search-btn">
                  <Link href="/flight-match">Search</Link>
                </div> */}
              <FormAnt.Item className="search-flex-div">
                <Button
                  style={{
                    backgroundColor: "#0043a4",
                    color: "#fff",
                    width: "120px",
                    height: "60px",
                  }}
                  className="antd-btn-custom"
                  onClick={() =>
                    flightSearchForm
                      .validateFields()
                      .then(async () => {
                        // Display flight search processing modal
                        setFlightSearchProcessingModalVisibility(true);
                        // return;
                        await fetchFlightResults(
                          flightSearchForm.getFieldsValue()
                        )
                          .then((response) => {
                            console.log("Caught Resp:", response);
                            router.push("/flight-match");
                            // setFlightSearchProcessingModalVisibility(false);
                          })
                          .catch((error) => {
                            setFlightSearchProcessingModalVisibility(false);
                            console.log("Caught Error 2:", error);
                            // TODO: Pop up a dialog
                            setFlightSearchErrorModalVisibility(true);
                          });
                        // console.log(flightSearchForm.getFieldsValue());
                      })
                      .catch((err) => {
                        console.error("Form Error:", err);
                      })
                  }
                >
                  Search
                </Button>
              </FormAnt.Item>
            </div>
          </div>
        </div>
      </FormAnt>
      <Modal
        centered
        visible={flightSearchProcessingModalVisibility}
        width="auto"
        closable={false}
        keyboard={false}
        footer={null}
        className="loadFlightModal"
        bodyStyle={{ backgroundColor: "#0043a4", padding: "2rem" }}
      >
        <p className="flightModalTitle">Loading the best flights</p>
        <div className="row row-custom">
          <div
            className="col-4 col-sm-4 flightFrom"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p className="flightStatus">Flight</p>
            <p className="flightStatus">From:</p>
            <p className="flightModalCode" style={{ textAlign: "start" }}>{`${
              flightSearchForm.getFieldsValue().originLocationCityCode
            }`}</p>
          </div>

          <div className="col-4 col-sm-4 plane-img">
            <Image src={aeroplaneImg} alt={"aeroplane-img"} />
          </div>
          <div
            className="col-4 col-sm-4 flightTo"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p className="flightStatus" style={{ textAlign: "end" }}>
              Flight
            </p>
            <p className="flightStatus" style={{ textAlign: "end" }}>
              To:
            </p>
            <p className="flightModalCode" style={{ textAlign: "end" }}>{`${
              flightSearchForm.getFieldsValue().originDestinationCityCode
            }`}</p>
          </div>
        </div>
        <p className="flightModalTitle">
          Travel Date :&nbsp; {`${new Date(
            flightSearchForm.getFieldsValue().selectedDepartureDate
          ).toLocaleString("default", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })} `}
          
        </p>
        <p className="flightModalTitle">
          {adultNumValue + childrenNumValue + infantsNumValue} Passengers
        </p>
        <p className="flightModalTitle">
          {flightSearchForm.getFieldsValue().flightClass}
        </p>

        <div>
          <center>
            <Spin style={{ color: "rgba(252, 166, 43, 0.8)" }} />
          </center>
        </div>
      </Modal>

      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        visible={flightSearchErrorModalVisibility}
        style={{ color: "#fff" }}
        width="auto"
        keyboard={false}
        footer={null}
        className="loadFlightModal"
        bodyStyle={{ backgroundColor: "#0043a4", padding: "3rem" }}
      >
        <p className="flightModalTitle">
          Network Issue, Please check your connection
        </p>
      </Modal>
    </>
  );
};

export default Oneway;

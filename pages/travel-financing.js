import Head from "next/head";
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

const Travel_Financing = () => {
    return ( 
        <>
        <Head>
            <title>247Travels | Travel Financing</title>
        </Head>

        <div>
            <div className="container">
                <div className="travelfinance-parent">
                    <h5 className="travelfinance-heading">Travel Financing</h5>
                </div>
            </div>
            <div className="container-fluid travel-div">
                <div className="container">
                    <div className="travel-input-div">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className=" ticket-cost-input">
                                    <label htmlFor="text">Total Ticket Cost</label>
                                    <input type="text" aria-label="First name" className="form-control travelfinance-input" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="available-payment ">
                                <label htmlFor="text">First Installment/Down Payment Available</label>
                                    <input type="text" aria-label="First name" className="form-control travelfinance-input" />   
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3 payment">
                                <label htmlFor="text">Payment Circle</label>
                            
                                {/* <DropdownButton align="end" id="dropdown-menu-align-end custom-travel-drop" title="Select Payment Circle" className="dropdown-travel-custom" >
                                    <Dropdown.Item eventKey="1" href="#/action-1">A Month or Less</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="2" href="#/action-2">Two Months</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">Three Months</Dropdown.Item>
                                </DropdownButton> */}
                                  <Select
                                    id="dropdown-menu-align-end custom-travel-drop" className="dropdown-travel-custom" placeholder="Select Payment Circle"
                                    defaultValue=""
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                  >
                                    <Option value="march">A Month or Less</Option>
                                    <Option value="april">Two Months</Option>
                                    <Option value="may">Three Months</Option>
                                  </Select>
                                
                            </div>

                            <div className=" container ">
                                <div className="travel-input-btn">
                                    <button type="button" className="btn btn-outline-primary travel-bttn-custom">Calculate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
}
 
export default Travel_Financing;
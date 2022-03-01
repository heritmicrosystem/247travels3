import Form from "react-bootstrap/Form";
import Image from "next/image";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import usernameIcon from "../../public/icons/username.webp";
import passwordIcon from "../../public/icons/password.webp";
import visibilityIcon from "../../public/icons/visibility.webp";
import contactIcon from "../../public/icons/contact.webp";
import calenderIcon from "../../public/icons/calender.webp";
import genderIcon from "../../public/icons/gender.webp";
import emailIcon from "../../public/icons/email.webp";

const Signup = () => {
  return (
    <>
      <div id="form_login">
        {/* <Image src={logoImg} alt={"247travels official logo"} /> */}
        <Form className="form-container">
          <div className="login-head">
            <h5>Sign Up for an account</h5>

            {/* grid incoming */}
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="title-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form">Title</Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <InputGroup.Text id="basic-addon1">
                        <Image src={usernameIcon} alt={"username icon"} />
                      </InputGroup.Text>
                      <DropdownButton
                        align="end"
                        id="dropdown-menu-align-end custom-login"
                        title="Select Title"
                        className="dropdowm-travel-custom"
                      >
                        <Dropdown.Item eventkey="1" href="#/action-1">
                          Mr
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="2" href="#/action-2">
                          Mrs
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="3" href="#/action-3">
                          Mrs
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="gender-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form">Gender</Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <InputGroup.Text id="basic-addon1">
                        <Image src={genderIcon} alt={"gender icon"} />
                      </InputGroup.Text>
                      <DropdownButton
                        align="end"
                        id="dropdown-menu-align-end custom-login"
                        title="Gender"
                        className="dropdowm-travel-custom"
                      >
                        <Dropdown.Item eventkey="1" href="#/action-1">
                          Male
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="2" href="#/action-2">
                          Female
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="login-form">Full Name</Form.Label>
              <InputGroup className="mb-3 login-email">
                <InputGroup.Text id="basic-addon1">
                  <Image src={usernameIcon} alt={"username icon"} />
                </InputGroup.Text>
                <Form.Control
                  className="form-basic-email"
                  type="name"
                  placeholder="Enter Full Name"
                />
              </InputGroup>
            </Form.Group>

            {/* calender */}
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="title-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form">
                      Date of Birth
                    </Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <InputGroup.Text id="basic-addon1">
                        <Image src={calenderIcon} alt={"calender icon"} />
                      </InputGroup.Text>
                      <DropdownButton
                        align="end"
                        id="dropdown-menu-align-end custom-login"
                        title="Year"
                        className="dropdowm-travel-custom"
                      >
                        <Dropdown.Item eventkey="1" href="#/action-1">
                          2022
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="2" href="#/action-2">
                          2021
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="3" href="#/action-2">
                          2020
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="gender-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form"></Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <DropdownButton
                        align="end"
                        id="dropdown-menu-align-end custom-login"
                        title="Month"
                        className="dropdowm-travel-custom"
                      >
                        <Dropdown.Item eventkey="1" href="#/action-1">
                          January
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="2" href="#/action-2">
                          February
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="3" href="#/action-2">
                          March
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="gender-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form"></Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <DropdownButton
                        align="end"
                        id="dropdown-menu-align-end custom-login"
                        title="Day"
                        className="dropdowm-travel-custom"
                      >
                        <Dropdown.Item eventkey="1" href="#/action-1">
                          14
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="2" href="#/action-2">
                          13
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="3" href="#/action-2">
                          12
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
            </div>

            {/* contact number */}
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="title-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form">Phone</Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <DropdownButton
                        align="end"
                        id="dropdown-menu-align-end custom-login"
                        title="+234(NGN)"
                        className="dropdowm-travel-custom"
                      >
                        <Dropdown.Item eventkey="1" href="#/action-1">
                          +44(UK)
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="2" href="#/action-2">
                          +91(US)
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventkey="3" href="#/action-2">
                          +233(GHA)
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="gender-input">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form"></Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <InputGroup.Text id="basic-addon1">
                        <Image src={contactIcon} alt={"contact icon"} />
                      </InputGroup.Text>
                      <Form.Control
                        className="form-basic-email"
                        type="number"
                        title="+234(NGN)"
                        placeholder="Enter Contact Number"
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
            </div>
            {/* Email Address */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="login-form">Email Address</Form.Label>
              <InputGroup className="mb-3 login-email">
                <InputGroup.Text id="basic-addon1">
                  <Image src={emailIcon} alt={"email icon"} />
                </InputGroup.Text>
                <Form.Control
                  className="form-basic-email"
                  type="email"
                  placeholder="Enter email"
                />
              </InputGroup>
            </Form.Group>
            {/*Password  */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="login-form">Password</Form.Label>
              {/* className="form-basic-password" */}
              {/* <Form.Control controlId="formBasicPassword" type="password" placeholder="Password" /> */}
              <InputGroup className="mb-3 login-email">
                <InputGroup.Text id="basic-addon1">
                  <Image src={passwordIcon} alt={"password icon"} />
                </InputGroup.Text>
                <Form.Control
                  className="form-basic-email"
                  controlId="formBasicPassword"
                  type="password"
                  placeholder="Password"
                />
                <InputGroup.Text id="basic-addon1">
                  <Image src={visibilityIcon} alt={"visibility icon"} />
                </InputGroup.Text>
              </InputGroup>
              {/* <div className="forgot-pass d-flex mt-2">
                                            <Form.Text className="text-muted form-btn-text">
                                                Forgot Password?
                                            </Form.Text>
                                            <Form.Text className="text-muted form-btn-weight-text">
                                                Don't have an account? <p className="form-btn-weight-text">Create Account</p>
                                            </Form.Text>
                                            
                                        </div>   */}
            </Form.Group>
            <div className="mb-2 mt-2">
              <Button
                className="form-btn mb-5 mt-5"
                variant="primary"
                type="submit"
              >
                Continue
              </Button>
            </div>
            <div className="policy-comment-div">
              <Form.Text className="text-muted form-btn-weight-text">
                By logging in you accept our{" "}
                <p className="form-btn-weight-text">terms of use</p> and{" "}
                <p className="form-btn-weight-text">privacy policy.</p>
              </Form.Text>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;

import React from "react";
import Link from "next/link";
import { Button, Form, Input, Tabs } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "../../components/Files/country-dial-codes.js";

const { Option } = Select;

const AffiliateLogin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-4 card m-auto shadow-lg">
          <div className="card-body custom-made p-5">
            <div className="p-4">
              <span
                style={{
                  color: "#0043a4",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                Login to your account
              </span>
            </div>
            <div className="form-group p-4">
              <label
                htmlFor="Sign Up"
                style={{ color: "#0043a4" }}
                className="pb-2"
              >
                Enter E-mail Address
              </label>
              <input className="form-control affiliate-input" />
            </div>
            <div className="form-group p-4">
              <label
                htmlFor="Sign Up"
                style={{ color: "#0043a4" }}
                className="pb-2"
              >
                Enter Password
              </label>
              <input className="form-control affiliate-input" />
              <div className="forgot-password-div">
                <small style={{ color: "#0043a4", fontWeight: "600" }}>
                  Forgot Password?{" "}
                </small>
                <small
                  className="small-right"
                  style={{ color: "#0043a4", fontWeight: "600" }}
                >
                  Do not have an account?{" "}
                  
                  <span style={{ color: "orange" }}><Link href='/access-comps/signup_agency' passHref><a style={{color:'orange'}}>Create Account</a></Link></span>
                </small>
              </div>
            </div>
            <div className="form-group pt-4" style={{ textAlign: "center" }}>
            <Link href="/B2bIndex" as='/B2B-Index' passHref><a><input
                type="Submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#0043a4" }}
              /></a></Link>
            </div>
            <div style={{ textAlign: "center" }} className="p-4">
              <small style={{ color: "#0043a4", fontWeight: "600" }}>
                By logging in you accept our{" "}
                <span style={{ color: "orange", fontWeight: "600" }}>
                  terms of use
                </span>{" "}
                and <span style={{ color: "orange" }}>privacy policy.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* ********************* */}
      {/* <div className="row mt-5">
        <div className="col-md-4 card m-auto shadow-lg">
          <div className="card-body custom-made p-5">
            <div className="p-4">
              <span
                style={{
                  color: "#0043a4",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                Sign Up for an Account
              </span>
            </div>
            <div className="form-group p-4">
              <label
                htmlFor="Sign Up"
                style={{ color: "#0043a4" }}
                className="pb-2"
              >
                Enter E-mail Address
              </label>
              <input className="form-control affiliate-input" />
            </div>
            <div className="form-group p-4">
              <label
                htmlFor="Sign Up"
                style={{ color: "#0043a4" }}
                className="pb-2"
              >
                Enter Password
              </label>
              <input className="form-control affiliate-input" />
              <div className="forgot-password-div">
                <small style={{ color: "#0043a4", fontWeight: "600" }}>
                  Forgot Password?{" "}
                </small>
                <small
                  className="small-right"
                  style={{ color: "#0043a4", fontWeight: "600" }}
                >
                  Do not have an account?{" "}
                  <Link href="" passHref>
                    <span style={{ color: "orange" }}>Create Account</span>
                  </Link>
                </small>
              </div>
            </div>
            <div className="form-group pt-4" style={{ textAlign: "center" }}>
              <input
                type="Submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#0043a4" }}
              />
            </div>
            <div style={{ textAlign: "center" }} className="p-4">
              <small style={{ color: "#0043a4", fontWeight: "600" }}>
                By logging in you accept our{" "}
                <span style={{ color: "orange", fontWeight: "600" }}>
                  terms of use
                </span>{" "}
                and <span style={{ color: "orange" }}>privacy policy.</span>
              </small>
            </div>
          </div>
        </div>
      </div> */}
      {/* **************************** */}
      <div className="row mt-5" style={{ display:'none'}}>
        <div className="col-md-4 m-auto shadow-lg">
          <div className="p-4">
            <span
              style={{ color: "#0043a4", fontWeight: "700", fontSize: "20px" }}
            >
              Login to your account
            </span>
          </div>
          <Form
            name="normal_login"
            className="login-form p-5"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            {/* COMPANY NAME */}

            <Form.Item
              className="p-4"
              name="company-name"
              rules={[
                {
                  required: true,
                  message: "Input Company Name!",
                },
              ]}
            >
              <Input placeholder="Enter Company Name" />
            </Form.Item>

            <div className="row">
              <div className="col-sm-12 col-md-4">
                <Select
                  className="w-100 p-4"
                  showSearch
                  placeholder="Select Country"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {dial_codes.map((dialCode, index) => (
                    <Option value={ dialCode.dial_codes} key={index}>{dialCode}</Option>
                  ))}

                </Select>
              </div>
              <div className="col-sm-12 col-md-8">
                <Form.Item
                  className="p-4"
                  name="company-name"
                  rules={[
                    {
                      required: true,
                      message: "Input Company Name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Company Name" />
                </Form.Item>
              </div>
            </div>

            {/* USERNAME */}

            <Form.Item
              className="p-4"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            {/* PASSWORD */}

            <Form.Item
              className="p-4"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                style={{ border: "1px solid #000" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            {/* CONFIRM PASSWORD */}

            <Form.Item
              className="p-4"
              name="confirm-password"
              rules={[
                {
                  required: true,
                  message: "Confirm Password!",
                },
              ]}
            >
              <Input
                style={{ border: "1px solid #000" }}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <div className="forgot-password-div p-4">
              <small style={{ color: "#0043a4" }}>Forgot Password? </small>
              <small style={{ color: "#0043a4" }}>
                Do not have an account?{" "}
                <span style={{ color: "orange" }}><Link href='/access-comps/signup_agency' passHref><a>Create Account</a></Link></span>
              </small>
            </div>

            {/* BUTTON */}

            <div>
              <Form.Item className="login-form-button affiliate-btn">
                <Link href="/access-comps/B2bIndex" as='/B2B-Index' passHref>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Continue
                  </Button>
                </Link>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AffiliateLogin;

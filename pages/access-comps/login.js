import react from 'react';
import Form from "react-bootstrap/Form";
import Image from "next/image";
import Link from "next/link";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import usernameIcon from "../../public/icons/username.webp";
import passwordIcon from "../../public/icons/password.webp";
import visibilityIcon from "../../public/icons/visibility.webp";
import { EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="login-parent">
          <div className="login-container">
            <div id="form_login">
              {/* <Image src={logoImg} alt={"247travels official logo"} /> */}
              <Form className="form-container">
                <div className="login-head">
                  <h5>Login to your account</h5>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-form">
                      Email address
                    </Form.Label>
                    <InputGroup className="mb-3 login-email">
                      <InputGroup.Text id="basic-addon1">
                        <Image src={usernameIcon} alt={"username icon"} />
                      </InputGroup.Text>
                      <Form.Control
                        className="form-basic-email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="login-form">Password</Form.Label>
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
                    <div className="forgot-pass d-flex mt-2">
                      <Form.Text className="text-muted form-btn-text">
                        Forgot Password?
                      </Form.Text>
                      <Form.Text className="text-muted form-btn-weight-text">
                        Do not have an account?{" "}
                        <p className="form-btn-weight-text">Create Account</p>
                      </Form.Text>
                    </div>
                  </Form.Group>

                  <Link href="/affiliate-program" passHref>
                    <Button
                      className="form-btn mb-2 mt-2"
                      variant="primary"
                      type="submit"
                    >
                      {" "}
                      Continue{" "}
                    </Button>
                  </Link>
                  <Form.Text className="text-muted form-btn-weight-text">
                    By logging in you accept our{" "}
                    <p className="form-btn-weight-text">terms of use</p> and{" "}
                    <p className="form-btn-weight-text">privacy policy.</p>
                  </Form.Text>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

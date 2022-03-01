import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import contactBanner from "../public/contact-us.webp";
import locationIcon from "../public/location.webp";
import callIcon from "/public/call.webp";
import emailIcon from "/public/Email.webp";
const Contact_Us = () => {
  return (
    <>
      <Head>
        <title>247Travels | Contact Us</title>
      </Head>
      <div>
        <div className="container">
          <div className="contactus-banner-container">
            <Image src={contactBanner} alt={"contactus-banner"} />
          </div>
        </div>
        <div className="container-fluid ">
          <div className="contact-form">

            <div className="container">
              <div className="contactform-div">
                <div className="row">
                  <div className="col-md-12 col-lg-5">
                    <div className="card-contact-info">
                      <div className="contact-intro">
                        <p className="contact-p contact-intro-p">Hey there,</p>
                        <h3 className="contact-heading">Let&apos;s Get In Touch</h3>
                      </div>
                      <div className="contact-info">
                        <div className="location-icon pt-4 pb-3 d-flex">
                          <div className="img-wrapper-1">
                            <Image src={locationIcon} alt={"location-icon"} />
                          </div>
                          <p className="contact-p">
                            19, Pariola Street, Ogudu G.R.A, Lagos
                          </p>
                        </div>
                        <div className="call-icon pt-4 pb-3 d-flex">
                          <div className="img-wrapper-1">
                            <Image src={callIcon} alt={"call-icon"} />
                          </div>
                          <p className="contact-p">+234 705 70000 247</p>
                        </div>
                        <div className="message-icon pt-4 pb-3 d-flex">
                          <div className="img-wrapper">
                            <Image src={emailIcon} alt={"message-icon"} />
                          </div>
                          <p className="contact-p">info@247travels.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="col-md-12 col-lg-7">
                    <div className="card-text-area">
                      <form className="position-relative">
                        <div className="tile-1 mb-5">
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <label htmlFor="text">First Name</label>
                              <input
                                type="text"
                                className="form-control input-field-custom"
                                id="contact_first_name"
                                placeholder=""
                              />
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <label htmlFor="text">Last Name</label>
                              <input
                                type="text"
                                className="form-control input-field-custom"
                                id="contact_last_name"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tile-2 mb-5">
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <label htmlFor="inputEmail4">Email</label>
                              <input
                                type="email"
                                className="form-control input-field-custom"
                                id="contact_email"
                                placeholder=""
                              />
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <label htmlFor="number">Phone Number</label>
                              <input
                                type="text"
                                className="form-control input-field-custom"
                                id="contact_number"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tile-3 mb-5">
                          <label htmlFor="text">
                            Message
                            <span
                              className="glyphicon glyphicon-asterisk"
                              aria-hidden="true"
                            ></span>{" "}
                          </label>
                          <textarea
                            className="form-control input-field-custom"
                            id="contact_message"
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="tile-4">
                          <button
                            type="submit"
                            id="contact_btn"
                            className="btn bttn-custom position-absolute"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Us;

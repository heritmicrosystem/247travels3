import Image from "next/image";
import Link from "next/link";
import kenyaAirline from "../public/Kenya-airline-logo_11zon.webp";
import qatarAirways from "../public/Qatar_Airways_logo_11zon.webp";
import royalCarribean from "../public/royal-caribbean_11zon.webp";
import virginAtlantic from "../public/Virgin_Atlantic_logo_11zon.webp";
import group from "../public/Group_1602_11zon.webp";
import britishAirways from "../public/British-airways_11zon.webp";
import submitButton from "../public/right-button.webp";
import submitButtonBlue from "../public/icons/arrow.webp";
import twitterIcon from "../public/icons/Twitter.webp";
import instagramIcon from "../public/icons/Instagram.webp";
import facebookIcon from "../public/icons/facebook.webp";
import locationIcon from "../public/location.webp";
import callIcon from "/public/call.webp";
import emailIcon from "/public/Email.webp";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="container pt-2 d-flex">
            <div className="row airline-container col-sm-4 col-md-12">
              <div className="col">
                {" "}
                <Image src={virginAtlantic} alt={"virgin-atlantic Logo"} />
              </div>
              <div className="col">
                {" "}
                <Image src={qatarAirways} alt={"qatar-airways Logo"} />
              </div>
              <div className="col">
                {" "}
                <Image src={kenyaAirline} alt={"kenya-airline Logo"} />{" "}
              </div>
              <div className="col">
                {" "}
                <Image src={royalCarribean} alt={"royal-carribean Logo"} />{" "}
              </div>
              <div className="col">
                {" "}
                <Image src={britishAirways} alt={"british-airways Logo"} />
              </div>
              <div className="col group">
                {" "}
                <Image src={group} alt={" Logo"} />{" "}
              </div>
            </div>
          </div>
          <div className="row subscribe-div">
            <div className="col-12 col-md-5">
              <div className="subscribe-box">
                <Link href="/">
                  <a>
                    <Image
                      src="/247TRAVELS-logo-invert.webp"
                      width={160}
                      height={50}
                      alt={"company Logo"}
                    />{" "}
                  </a>
                </Link>
                <p className="subscribe-text">
                  I would like to receive latest updates on travel deals and
                  services
                </p>
                <div className="subscribe-input-div position-relative">
                  <form action="http://www.acme.com/register" method="POST">
                    <input
                      className="subscribe-input"
                      id="email_id"
                      name="email"
                      placeholder="Email Address "
                      type="text"
                      autoComplete="name"
                      required
                    />
                    <button
                      className="position-absolute"
                      id="submitbutton"
                      type="submit"
                    >
                      <Image src={submitButton} alt={"submit-btn"} />
                    </button>
                  </form>
                </div>
                <div className="footer-social-handler">
                  <p className="footer-text">Follow Us</p>
                  <div className="footer-social-icon">
                    <div className="sm-icon-div">
                      <Link href="https://twitter.com/">
                        <a>
                          <Image
                            className="sm-icon"
                            src={twitterIcon}
                            alt={"twitter"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="sm-icon-div">
                      <Link href="https://instagram.com/">
                        <a>
                          <Image
                            className="sm-icon"
                            src={instagramIcon}
                            alt={"instagram"}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="sm-icon-div">
                      <Link href="https://facebook.com/">
                        <a>
                          <Image
                            className="sm-icon"
                            src={facebookIcon}
                            alt={"facebook"}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div className="quicklinks-parent">
                <div>
                  <h5 className="quick-links">Quick Links</h5>
                </div>
                <p>
                  {" "}
                  <Link href="/">
                    <a className="quick-link"> Home </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/aboutus">
                    <a className="quick-link"> About Us </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/flight">
                    <a className="quick-link"> Flight </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/visa">
                    <a className="quick-link"> Visa </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/contact-us">
                    <a className="quick-link"> Contact Us </a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div className="account-parent">
                <div>
                  <h5 className="quick-links">Account</h5>
                </div>
                <p>
                  <Link href="/login">
                    <a className="quick-link"> Login </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/signup">
                    <a className="quick-link"> Sign Up </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/affiliates">
                    <a className="quick-link"> Affiliates </a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/travel-financing">
                    <a className="quick-link"> Travelling Financing </a>
                  </Link>
                </p>
                <p> 
                  {" "}
                  <Link href="/careers">
                    <a className="quick-link"> Careers </a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <h5 className="quick-links">Contact Us</h5>
              <div className="location">
                <div className="contact-icon-div">
                  <Image src={locationIcon} alt={"location icon"} />
                </div>
                <p className="location-contact">
                  19, Pariola Street, Ogudu G.R.A, Lagos
                </p>
              </div>
              <div className="call">
                <div className="contact-icon-div">
                  <Image src={callIcon} alt={"call icon"} />
                </div>
                <p className="call-contact">+234 705 7000 247</p>
              </div>
              <div className="email">
                <div className="contact-icon-div">
                  <Image src={emailIcon} alt={"email icon"} />
                </div>
                <p className="email-contact"> info@247travels.com</p>
              </div>
            </div>
            <div className="right-reserved">
              <div className="row">
                <div className="col-md-9">
                  <p className="footer-text">
                    &copy; 2022 247travels. All right reserved
                  </p>
                </div>
                <div className="col-md-2">
                  <p className="footer-text">Privacy Policy</p>
                </div>
                <div className="col-md-1">
                  <Link href="https://g.page/247Travels?share">
                    <a className="footer-text">Site Map</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

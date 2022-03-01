import React, { useState, useEffect } from 'react';
import Head from "next/head";
import "../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Blogpost from "../components/blogpost.js";
import HotDeals from "../components/hotDeals.js";
import Form from "react-bootstrap/Form";
import { Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import { Tabs as TabsAnt } from "antd";
import Oneway from "../components/custom-comps/Oneway.js";
import Multicity from "../components/custom-comps/Multicity.js";
import Roundtrip from "../components/custom-comps/Roundtrip.js";
import API from "./api/apiClient";
import { Rate } from "antd";
import ApiRoutes from "./api/apiRoutes";

const { TabPane } = TabsAnt;

// const state = {size:'large'};
// const {size} = state;

export const getStaticProps = async () => {
  const result = await API.get(ApiRoutes.FetchAirports);

  let airports = result.data.response;

  return {
    props: { airports: airports },
  };
};

export default function Home({ airports }) {

  return (
    <>
      <Head>
        <title>247Travels | Home</title>
        <meta name="keywords" content="247Travels" />
      </Head>

      <div className="flightsearch-parent">
        <div className=" flightsearch-wrapper container">
          <div className="flightsearch-div">
            <div className="trip-type">
              <div className="container">
                <div className="container">
                  <div className="trip-menu">
                    <TabsAnt defaultActiveKey="2">
                      <TabPane tab={<span>One Way</span>} key="1" disabled={true}>
                        <Oneway airports={airports} />
                      </TabPane>{" "}

                      <TabPane
                        tab={<span>Round Trip</span>}
                        key="2"
                        className="indexpage-tab-menu">
                        <Roundtrip airports={airports} />
                      </TabPane>{" "}

                      <TabPane tab={<span>Multi City</span>} key="3" disabled={true}>
                        <Multicity airports={airports} />
                      </TabPane>
                    </TabsAnt>

                    {/* ******************************** */}

                  </div>
                </div>
              </div>
            </div>
            {/* ******** */}
          </div>
        </div>
      </div>
      {/* ******* */}

      {/* <HotDeals /> */}

      {/* ******* */}

      {/*  */}

      <div className="container ">
        <Link href="/payment-custom" passHref ><a><h3 className="review-header">Customer Reviews</h3></a></Link>
      </div>
      <div className=" review container">
        <div className="review-box mb-2">
          <h5>
            Travelling with 247travels was the best experience so far. Their
            customer experience is excellent and processing my flight was very
            easy. I will choose 247travels whenever I want to travel
          </h5>
          <div className="rating-icon">
            <Rate allowClear={false} defaultValue={3} />
          </div>
        </div>

        <h3 className="reviewers">Benjamin A-canoe</h3>
        <h4 className="reviewers">Business Manager, Mercedes Service</h4>
      </div>

      {/*  */}
      <Blogpost />
    </>
  );
}

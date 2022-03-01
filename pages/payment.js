import React, { useState, useRef } from "react";
import styles from "../styles/BookPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button as ButtonAnt, Tabs, Table, Descriptions } from "antd";
import BookingSummary from "../components/BookingSummary";
import webPayCards from "../public/webpaycards.png";
import raveCards from "../public/ravecards.png";
import { useEffect } from "react";
import { useInitializePayment } from './api/apiClient';
import ApiRoutes from "./api/apiRoutes";
import API from "./api/apiClient";
import { useRouter } from "next/router";
import { ToastComponent } from '@syncfusion/ej2-react-notifications';

const PaymentCustom = () => {

  const setSelectedFlightOffer = useSelector(
    (state) => state.store.selectedOffer
  );

  // Set the useRouter hook
  const router = useRouter();

  // Initialize payment api hook
  const initializePayment = useInitializePayment();

  const toastInstance = useRef(null);

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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mb-5">

            <BookingSummary setSelectedFlightOffer={setSelectedFlightOffer} />
          </div>
          <div className="col-xl-8 col-lg-7 col-12 mt-5 mb-5">
            <div className="paymentPage">
              <Tabs defaultActiveKey="bank" tabPosition='left' type="card">
                <Tabs.TabPane tab={<strong>Continue and Pay Later</strong>} key="bankTransfer">

                  {/* <Descriptions
                  bordered
                  title="Payment Summary"
                  size='small'
                  layout="vertical"
                >
                  <Descriptions.Item label="Total">{setSelectedFlightOffer.price.total}</Descriptions.Item>
                </Descriptions> */}

                  <div className="bankAccountWrapper"><strong>Account Name: 247 Travels &amp; Vacation Ltd</strong></div>
                  <br />
                  <Table dataSource={[
                    {
                      bank: 'First City Monument Bank Plc. (FCMB)',
                      accountNumber: '2244296019'
                    },
                    {
                      bank: 'Sterling Bank PLC',
                      accountNumber: '0027784775'
                    },
                    {
                      bank: 'Fidelity Bank PLC',
                      accountNumber: '5600032999'
                    },
                    {
                      bank: 'Access Bank Plc',
                      accountNumber: '0027336846'
                    }
                  ]}
                    pagination={false}>
                    <Table.Column key='bank' title='Bank' dataIndex='bank' />
                    <Table.Column key='accountNumber'
                      title='Account Number'
                      dataIndex='accountNumber' />

                  </Table>
                  <br />
                  <ButtonAnt className="pay-btn" onClick={async () => {
                        await API.post(ApiRoutes.ReserveFlight, {
                          customerId: window.localStorage.getItem('customerId'),
                          flightOrderId: window.localStorage.getItem('flightOrderId')
                        }).then(result => {
                          // TODO: Remove log
                          console.log('Reservation Result:', result);
                          if (result.data.successful) {
                            // Set the reservation id
                            window.localStorage.setItem('reservationId', result.data.response.reservationId)
                            // Navigate to flight reservation success page
                            router.push('/reservationResult');
                          }
                          else {
                            // Display error...
                            displayError('Error', 'Your reservation failed to process!');
                          }
                        })
                          .catch(error => {
                            // Log the error
                            console.error('Reservation Error:', error);
                            // Display error
                            displayError('Error', 'Flight reservation could not be processed due to an error');
                          });
                      }}>Confirm Reservation</ButtonAnt>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<strong>Continue with Card Payment</strong>} key='cardPayment'>
                  <div className="col-9">
                    <div className="payment-type" style={{ textAlign: "center" }}>
                      <span
                        className=""
                        style={{ color: "grey", fontWeight: "600" }}
                      >
                        Payment methods supported are listed below
                      </span>
                      <div className="cardPayImg" style={{ margin: "1.5rem 0" }}>
                        <div>
                          <Image
                            src={webPayCards}
                            alt={""}
                          // width={270}
                          // height={50}
                          />
                        </div>
                        <div
                          className="mt-3 mb-5"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div>
                            <Image
                              src={raveCards}
                              alt={""}
                              width={50}
                              height={50}
                            />
                          </div>
                          <small style={{ color: "grey", fontWeight: "600" }}>
                            Paystack
                          </small>
                        </div>
                      </div>
                      <div
                        className="Total"
                        style={{ color: "#0043a4", fontWeight: "700" }}
                      >
                        {/* TODO: Display original price */}
                        <p>{parseFloat(setSelectedFlightOffer.price.grandTotal).toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
                      </div>
                      <ButtonAnt className="pay-btn" onClick={async () => {
                        await API.post('api/payment/initialize', {
                          customerId: window.localStorage.getItem('customerId'),
                          flightOrderId: window.localStorage.getItem('flightOrderId'),
                          amount: setSelectedFlightOffer.price.grandTotal,
                          callbackUrl: 'http://test.247travels.com/paymentVerify'
                        }).then(result => {
                          // TODO: Remove log
                          console.log('Payment Initialize Result:', result);
                          if (result.data.successful) {
                            window.location.replace(result.data.response.data.authorizationUrl);
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
                      }}>Pay Securely</ButtonAnt>
                      <div style={{ margin: "1rem 0" }}>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          This booking is 100% secured
                        </span>
                      </div>
                      <div
                        style={{
                          margin: "2rem 0",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "50%",
                          display: "inline-flex",
                        }}
                      >
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Secure transmission
                        </span>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Encrypted storage
                        </span>
                      </div>
                    </div>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<strong>Continue and Pay with Pay Fi</strong>} key="payFi">
                  Pay with Pay Fi
                </Tabs.TabPane>
              </Tabs>

            </div>
          </div>
        </div>
      </div>

      <ToastComponent ref={toastInstance} animation={{ show: { effect: 'SlideLeftIn', duration: 300, easing: 'linear' }, hide: { effect: 'SlideLeftOut', duration: 300, easing: 'linear' } }} />
    </>
  );
};

export default PaymentCustom;

import React, { useState, useEffect, useRef } from "react";
import { useVerifyPayment } from './api/apiClient';
import { Result, Button, Spin } from 'antd';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import OrderStatus from './orderStatus';

function PaymentVerify() {
  const [paymentStatus, setPaymentStatus] = useState(false);

  const [transactionResponse, setTransactionResponse] = useState({});

  const [transactionMessage, setTransactionMessage] = useState({});

  const verifyPayment = useVerifyPayment();

  const toastInstance = useRef(null);

  function displayError(title, content) {
    toastInstance.current.title = title;
    toastInstance.current.content = content;
    toastInstance.current.cssClass = 'e-error';
    toastInstance.current.show();
  }

  useEffect(() => {

    // Get the current url
    let urlString = window.location.href;

    // Get parameter and query strings
    let paramString = urlString.split("?")[1];
    let queryString = new URLSearchParams(paramString);

    // Get the trxref parameter from the query string
    let trxref = queryString.get('trxref');
    // Get the reference parameter from the query string
    let reference = queryString.get('reference');

    // Invoke the payment verification request
    async function paymentVerifyAsync() {
      await verifyPayment({ trxref: trxref, reference: reference }).then(
        (result) => {
          if (result.data.successful) {
            console.log('Flight Booked Result:', result);

            // if the order was placed before...
            if (result.data.response.retrievedOrderResult) {
              console.log('Retrieved Booked Result:', result.data.response.retrievedOrderResult);
              // Set the transaction message
              // of the retrieveed flight order
              setTransactionMessage({
                status: 'info',
                title: 'Your flight order has been placed successfully',
                subTitle: `Your PNR is ${result.data.response.retrievedOrderResult.response.data.associatedRecords[0].reference}`
              });
            }
            else {
              // Set the transaction message
              // of the created flight order
              setTransactionMessage({
                status: 'success',
                title: 'Your flight order has been placed successfully',
                subTitle: `Your PNR is ${result.data.response.createOrderResult.response.data.associatedRecords[0].reference}`
              });
            }

            // Update the payment status
            setPaymentStatus(true);
          }
        }
      )
        .catch(error => {
          console.error('Payment Verify Error:', error);
          displayError('Error', 'An error occurred!');
          setTransactionMessage({
            status: 'error',
            title: 'Your payment could not be verified due to an error',
            subTitle: 'Contact info@247travels.com specifying you payment reference for further support.'
          });
          setPaymentStatus(true);
        });
    }

    paymentVerifyAsync();
  }, [transactionResponse, setTransactionResponse]);

  return (
    <>
      <div>
        {paymentStatus ?
          (<Result
            status={transactionMessage.status}
            title={transactionMessage.title}
            subTitle={transactionMessage.subTitle}
          // extra={[
          //   <Button type="primary" key="viewOrderDetails">
          //     View Order Details
          //   </Button>,
          //   <Button key="buy">Go to the homepage</Button>,
          // ]}
          />) :
          (<div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <p style={{ textAlign: 'center' }}>Confirming your payment...</p>
            <Spin />
          </div>)}
      </div>

      <ToastComponent ref={toastInstance} animation={{ show: { effect: 'SlideLeftIn', duration: 300, easing: 'linear' }, hide: { effect: 'SlideLeftOut', duration: 300, easing: 'linear' } }} />
    </>
  );
}

export default PaymentVerify;

let data = {
  "data": {
    "response": {
      "createOrderResult": {
        "response": {
          "data": {
            "type": "flight-order",
            "id": "eJzTd9f3CjIKDw8AAAtSAnI%3D",
            "associatedRecords": [
              {
                "reference": "JR2WWP",
                "creationDate": "2022-02-16T18:17:00.000",
                "originalSystemCode": null,
                "flightOfferId": "1"
              }
            ],
            "flightOffers": [
              {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-02-17",
                "numberOfBookableSeats": 0,
                "itineraries": [
                  {
                    "duration": null,
                    "segments": [
                      {
                        "departure": {
                          "iataCode": "LOS",
                          "at": "2022-02-17T23:35:00"
                        },
                        "arrival": {
                          "iataCode": "CDG",
                          "terminal": "2E",
                          "at": "2022-02-18T06:05:00"
                        },
                        "carrierCode": "AF",
                        "number": "149",
                        "aircraft": {
                          "code": "332"
                        },
                        "duration": null,
                        "id": "26",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      },
                      {
                        "departure": {
                          "iataCode": "CDG",
                          "at": "2022-02-18T07:35:00"
                        },
                        "arrival": {
                          "iataCode": "LHR",
                          "terminal": "3",
                          "at": "2022-02-18T08:00:00"
                        },
                        "carrierCode": "AF",
                        "number": "1680",
                        "aircraft": {
                          "code": "320"
                        },
                        "duration": null,
                        "id": "27",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      }
                    ]
                  },
                  {
                    "duration": null,
                    "segments": [
                      {
                        "departure": {
                          "iataCode": "LHR",
                          "at": "2022-02-26T06:25:00"
                        },
                        "arrival": {
                          "iataCode": "CDG",
                          "terminal": "2E",
                          "at": "2022-02-26T08:45:00"
                        },
                        "carrierCode": "AF",
                        "number": "1381",
                        "aircraft": {
                          "code": "320"
                        },
                        "duration": null,
                        "id": "100",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      },
                      {
                        "departure": {
                          "iataCode": "CDG",
                          "at": "2022-02-26T14:40:00"
                        },
                        "arrival": {
                          "iataCode": "LOS",
                          "terminal": "I",
                          "at": "2022-02-26T21:05:00"
                        },
                        "carrierCode": "AF",
                        "number": "104",
                        "aircraft": {
                          "code": "332"
                        },
                        "duration": null,
                        "id": "101",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      }
                    ]
                  }
                ],
                "price": {
                  "currency": "NGN",
                  "total": "282517.00",
                  "base": "17760.00",
                  "fees": [
                    {
                      "amount": "0.00",
                      "type": "TICKETING"
                    },
                    {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                    },
                    {
                      "amount": "0.00",
                      "type": "FORM_OF_PAYMENT"
                    }
                  ],
                  "grandTotal": "282517.00"
                },
                "pricingOptions": {
                  "fareType": [
                    "PUBLISHED"
                  ],
                  "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                  "AF"
                ],
                "travelerPricings": [
                  {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "associatedAdultId": null,
                    "price": {
                      "currency": "NGN",
                      "total": "282517.00",
                      "base": "17760.00",
                      "fees": null,
                      "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                      {
                        "segmentId": "26",
                        "cabin": "ECONOMY",
                        "fareBasis": "RL50EIRT",
                        "class": "R",
                        "includedCheckedBags": {
                          "quantity": 1
                        }
                      },
                      {
                        "segmentId": "27",
                        "cabin": "ECONOMY",
                        "fareBasis": "RL50EIRT",
                        "class": "L",
                        "includedCheckedBags": {
                          "quantity": 1
                        }
                      },
                      {
                        "segmentId": "100",
                        "cabin": "ECONOMY",
                        "fareBasis": "RL50EIRT",
                        "class": "L",
                        "includedCheckedBags": {
                          "quantity": 1
                        }
                      },
                      {
                        "segmentId": "101",
                        "cabin": "ECONOMY",
                        "fareBasis": "RL50EIRT",
                        "class": "R",
                        "includedCheckedBags": {
                          "quantity": 1
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "travelers": [
              {
                "id": "1",
                "dateOfBirth": "1998-03-23",
                "name": {
                  "firstName": "Anwo",
                  "lastName": "Peter"
                },
                "gender": "MALE",
                "contact": {
                  "emailAddress": "m.peter.ayobami@gmail.com",
                  "phones": [
                    {
                      "deviceType": "MOBILE",
                      "countryCallingCode": "234",
                      "number": "08183279553"
                    }
                  ]
                },
                "documents": null
              }
            ],
            "formOfPayments": [
              {
                "other": {
                  "method": "CASH",
                  "flightOfferIds": [
                    "1"
                  ]
                }
              }
            ],
            "remarks": null,
            "ticketingAgreement": {
              "option": "DELAY_TO_CANCEL",
              "delay": "6D"
            },
            "contacts": [
              {
                "addresseeName": {
                  "firstName": "247 Travels and Vacation Limited",
                  "lastName": null
                },
                "address": {
                  "lines": [
                    "Manor Court 19 Pariola Street Ogudu GRA"
                  ],
                  "postalCode": null,
                  "cityName": "Lagos",
                  "countryCode": "NG"
                },
                "purpose": "INVOICE",
                "phones": null,
                "companyName": null,
                "emailAddress": null
              },
              {
                "addresseeName": {
                  "firstName": "247 Travels and Vacation Limited",
                  "lastName": null
                },
                "address": {
                  "lines": [
                    "Manor Court 19 Pariola Street Ogudu GRA"
                  ],
                  "postalCode": null,
                  "cityName": "Lagos",
                  "countryCode": "NG"
                },
                "purpose": "STANDARD",
                "phones": [
                  {
                    "deviceType": "LANDLINE",
                    "countryCallingCode": "234",
                    "number": "7057000247"
                  }
                ],
                "companyName": null,
                "emailAddress": "info@247travels.com"
              }
            ]
          }
        },
        "errorResponse": null,
        "httpResponse": {
          "version": "1.1",
          "content": {
            "headers": [
              {
                "key": "Content-Type",
                "value": [
                  "application/vnd.amadeus+json"
                ]
              },
              {
                "key": "Content-Length",
                "value": [
                  "3774"
                ]
              }
            ]
          },
          "statusCode": 201,
          "reasonPhrase": "Created",
          "headers": [
            {
              "key": "Date",
              "value": [
                "Wed, 16 Feb 2022 18:18:01 GMT"
              ]
            },
            {
              "key": "Connection",
              "value": [
                "keep-alive"
              ]
            },
            {
              "key": "ama-client-ref",
              "value": [
                "x-247travels-7fdf171a-1896-449d-9525-b28cec03daed",
                "x-247travels-7fdf171a-1896-449d-9525-b28cec03daed"
              ]
            },
            {
              "key": "Ama-Internal-Message-Version",
              "value": [
                "14.1"
              ]
            },
            {
              "key": "Ama-Request-Id",
              "value": [
                "00014X1AH7ETHO"
              ]
            },
            {
              "key": "Ama-Gateway-Request-Id",
              "value": [
                "rrt-0dfa63e35ca66294c-a-eu-30633-463326251-1"
              ]
            },
            {
              "key": "Access-Control-Allow-Headers",
              "value": [
                "origin, x-requested-with, accept, Content-Type, Authorization"
              ]
            },
            {
              "key": "Access-Control-Max-Age",
              "value": [
                "3628800"
              ]
            },
            {
              "key": "Access-Control-Allow-Methods",
              "value": [
                "OPTIONS, DELETE, POST, GET, PUT, PATCH"
              ]
            },
            {
              "key": "Server",
              "value": [
                "Amadeus"
              ]
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": [
                "*"
              ]
            },
            {
              "key": "Authorization",
              "value": [
                "Bearer gVDJSemMSfAKmzrgIgzzlDibyGge"
              ]
            }
          ],
          "trailingHeaders": [],
          "requestMessage": {
            "version": "1.1",
            "versionPolicy": 0,
            "content": {
              "headers": [
                {
                  "key": "Content-Type",
                  "value": [
                    "application/json; charset=utf-8"
                  ]
                }
              ]
            },
            "method": {
              "method": "POST"
            },
            "requestUri": "https://test.travel.api.amadeus.com/v1/booking/flight-orders",
            "headers": [
              {
                "key": "Ama-Client-Ref",
                "value": [
                  "x-247travels-7fdf171a-1896-449d-9525-b28cec03daed"
                ]
              },
              {
                "key": "Authorization",
                "value": [
                  "Bearer gVDJSemMSfAKmzrgIgzzlDibyGge"
                ]
              },
              {
                "key": "Transfer-Encoding",
                "value": [
                  "chunked"
                ]
              },
              {
                "key": "traceparent",
                "value": [
                  "00-b26c0b13cf49c4682459776daa3f5f80-3a18ce66d6f5be87-00"
                ]
              }
            ],
            "properties": {},
            "options": {}
          },
          "isSuccessStatusCode": true
        },
        "successful": true,
        "errorMessage": null
      }
    },
    "errorResponse": null,
    "httpResponse": null,
    "successful": true,
    "errorMessage": null
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    "content-type": "application/json; charset=utf-8"
  },
  "config": {
    "url": "api/payment/verify?trxref=7717210e-d94f-4fa1-b2f6-7190bc821fb5&reference=7717210e-d94f-4fa1-b2f6-7190bc821fb5",
    "method": "get",
    "headers": {
      "Accept": "application/json, text/plain, */*"
    },
    "baseURL": "https://apitest.247travels.com/",
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "httpsAgent": {},
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    }
  },
  "request": {}
}

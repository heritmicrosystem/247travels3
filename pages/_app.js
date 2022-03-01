import Layout from "../components/layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
import "../node_modules/@syncfusion/ej2-react-buttons/styles/fabric.css";
import "../node_modules/@syncfusion/ej2-popups/styles/fabric.css";
import "../node_modules/@syncfusion/ej2-react-notifications/styles/fabric.css";
import "../styles/oneway.css";
import "../styles/login.css";
import "../styles/signup.css";
import "../styles/navbarr.css";
import "../styles/travelercard.css";
import "../styles/affiliate-program.css";
import "../styles/flight-match.css";
import "../styles/flightNav.css";
import "../styles/BookedFlightTable.css";
import "../styles/BookPage.css";
import "../styles/RoundTrip.css";
import "../styles/payment.css";
import "../styles/affiliateLogin.css";
import '../styles/developerAPI.css'
import '../styles/searchHistory.css';
import '../styles/career.css';
import '../styles/blogpost.css';

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

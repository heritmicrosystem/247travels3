import Navbarr from "./navbarr";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbarr />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;


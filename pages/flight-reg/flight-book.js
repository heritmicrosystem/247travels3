import { Layout, Menu } from 'antd';
import Link from "next/link";
import Image from 'next/image';
import usernameIcon from "../../public/icons/username.webp";
import travellerIcon from "../../public/icons/traveller.webp";
import creditcardIcon from "../../public/icons/credit-card.webp";
import flightIcon from "../../public/icons/flight-booking.webp";

const { Header, Content, Footer, Sider } = Layout;

const AffiliatesProgram = () => {
    return ( 
        <>
        <Layout>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => { console.log(broken);}} 
            onCollapse={(collapsed, type) => {console.log(collapsed, type);}}>
            <div className="logo"><h5 className="sidebar-header">My Account</h5></div>
                <Menu theme="" mode="inline" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1"><Image src={usernameIcon} alt={"username icon"} /> <Link href="/affiliate-program" passHref><h5>Profile</h5></Link> </Menu.Item>
                    <Menu.Item key="2"><Image src={travellerIcon} alt={"travellers icon"} /> <Link href="/flight-reg/travelers" passHref><h5>Travellers</h5></Link> </Menu.Item>
                    <Menu.Item key="3"><Image src={flightIcon} alt={"flight icon"} /> <Link href="/flight-reg/flight-book" passHref><h5> Flight Bookings </h5></Link> </Menu.Item>
                    <Menu.Item key="4"><Image src={creditcardIcon} alt={"credit card icon"} /> <Link href="/flight-reg/credit-card" passHref><h5> Credit Card </h5></Link> </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content className="container" style={{ margin: '10px 50px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <h5 className="profile-header">Your Flight Bookings</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <div className="profile-contact-container">
                                    <h3 className="profile-prompt">No </h3> <h3 className="profile-username">Bookings Yet!</h3>
                                    <p className="profile-comments">Do not have any bookings? Search and book flight for your next trip</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="ad-container">
                                    <p>Advertisement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="travel-input-btn">
                        <Link href="\" passHref><button type="button" className="btn btn-outline-primary travelers-btn-custom book-flight "> + Book a Flight</button></Link>
                        </div>
                    </div>

                </div>
            </Content>
            </Layout>
        </Layout>
        
        </>
     );
}
 
export default AffiliatesProgram;
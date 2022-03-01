import { Layout, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import usernameIcon from "../public/icons/username.webp";
import travellerIcon from "../public/icons/traveller.webp";
import creditcardIcon from "../public/icons/credit-card.webp";
import flightIcon from "../public/icons/flight-booking.webp";

const { Header, Content, Sider } = Layout;

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
                <Menu theme="" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Image src={usernameIcon} alt={"username icon"} /> <Link href="/affiliate-program" passHref><h5>Profile</h5></Link> </Menu.Item>
                    <Menu.Item key="2"><Image src={travellerIcon} alt={"travellers icon"} /> <Link href="/flight-reg/travelers" passHref><h5>Travellers</h5></Link> </Menu.Item>
                    <Menu.Item key="3"><Image src={flightIcon} alt={"flight icon"} /> <Link href="/flight-reg/flight-book" passHref><h5> Flight Bookings </h5></Link> </Menu.Item>
                    <Menu.Item key="4"><Image src={creditcardIcon} alt={"credit card icon"} /> <Link href="/flight-reg/credit-card" passHref><h5> Credit Card </h5></Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content className="container" style={{ margin: '10px 50px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <h5 className="profile-header">My Profile</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <div className="profile-contact-container">
                                    <h3 className="profile-prompt">Hey</h3> <h3 className="profile-username">Benjamin!</h3>
                                    <p className="profile-comments">Below are your profile details to use when travelling.</p>
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
                        <div className="input-edit-container">
                            <p className="profile-contact-info">Contact Information</p>

                            <div className="name-edit mt-3">
                                <p>Name</p>
                                <h4>Mr. Benjamin Akano</h4>
                            </div>
                            <div className="name-edit mt-3">
                                <p>Email Address</p>
                                <h4>benjaminakano1@gmail.com</h4>
                            </div>
                            <div className="name-edit mt-3">
                                <p>Phone Number</p>
                                <h4>+234 813 0635 912</h4>
                            </div>
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
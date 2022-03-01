import React, { useState } from 'react';
import { Menu } from "antd";
import Link from 'next/link';

const DeveloperNavbar = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="alipay">
          <Link href="/B2bIndex" passHref>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="transactionHistory" > 
          <Link href="/transactionHistory" passHref>
                <a>Transaction History</a>
            </Link>
        </Menu.Item>
        <Menu.Item key="userProfile">
            <Link href="/userProfile" passHref>
                <a>User Profile</a>
            </Link>
        </Menu.Item>
        <Menu.Item key="developerAPI">
            <Link href="/developerAPI" passHref>
                <a>Developer API</a>
            </Link> 
        </Menu.Item>
        <Menu.Item key="searchHistory">
          <Link href="/searchHistory" passHref>
                <a>Search History</a>
        </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default DeveloperNavbar;

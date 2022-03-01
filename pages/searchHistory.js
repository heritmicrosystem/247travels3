// import React from "react";
// import "antd/dist/antd.css";
// import styles from "../styles/searchHistory.module.css";
// import { Table as TableAnt } from "antd";

// const columns = [
//   {
//     title: "Airline",
//     dataIndex: "airline",
//     render: (text) => <p>{text}</p>,
//   },
//   {
//     title: "Origin",
//     dataIndex: "origin",
//   },
//   {
//     title: "Destination",
//     className: "destination",
//     dataIndex: "destination",
//   },
//   {
//     title: "Number of Passenger",
//     dataIndex: "no_of_passenger",
//   },
//   {
//     title: "Total Amount",
//     className: "total_amount",
//     dataIndex: "total_amount",
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const data = [
//   {
//     key: "1",
//     name: "Covenant University",
//     productname: "Kaspersky software",
//     money: "$300.00",
//     address: "Lagos, State",
//   },
//   {
//     key: "2",
//     name: "Chicason Group",
//     productname: "Microsoft365 software",
//     money: "$1,256.00",
//     address: "Lagos, Nigeria",
//   },
//   {
//     key: "3",
//     name: "Animal Care",
//     productname: "Microsoft365 software",
//     money: "$1,200.00",
//     address: "Lagos, Nigeria",
//   },
//   {
//     key: "4",
//     name: "Living Faith Church",
//     productname: "Laptops",
//     money: "$12,560.00",
//     address: "Gbagada, Lagos",
//   },
//   {
//     key: "5",
//     name: "Health Flexi",
//     productname: "Solar panel, inverter Batteries(4)",
//     money: "$120,000.00",
//     address: "Victoria Island, Lagos",
//   },
// ];

// const SearchHistory = () => {
//   return (
//     <>
//     <div style={{background: 'rgba(0, 149, 255, 0.1)', border:"none"}}>
//       <div className="container">
//         <TableAnt className={styles.tableCustom} columns={columns} dataSource={data} bordered />
//       </div>
//     </div>
//     </>
//   );
// };
// export default SearchHistory;


import React from "react";
import { Table, Tooltip, columns, data } from "antd";
import { Menu, Dropdown, Button, Space, Divider, Modal } from "antd";
import styles from "../styles/searchHistory.module.css";
import { Table as TableAnt } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
// import { DownOutlined, UserOutlined} from '@ant-design/icons';

const SearchHistory = () => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Add new B2B",
      icon: <ExclamationCircleOutlined />,
      content: "FORM TABLE",

      onOk() {
        console.log("Save");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  const data = [
    {
      key: "1",

      name: "John Brown",
      company: "xown",
      role: "Sales Manager",
      status: "nil",
      date: "jan",
    },
    {
      key: "2",
      name: "John Brown",
      company: "xown",
      role: "Sales Manager",
      status: "nil",
      date: "jan",
    },
    {
      key: "3",
      name: "John Brown",
      company: "xown",
      role: "Sales Manager",
      status: "nil",
      date: "jan",
    },
    {
      key: "4",
      name: "John Brown",
      company: "xown",
      email: "",
      role: "Sales Manager",
      phone: "",
      status: "nil",
      date: "jan",
      login: "",
    },
    {
      key: "5",
      name: "John Brown",
      company: "xown",
      role: "Sales Manager",
      status: "nil",
      date: "jan",
    },
  ];

  return (
    <>
    <div className="container">
      <Space wrap style={{display: "none"}}>
        <Button onClick={showConfirm}>Add new B2B</Button>
      </Space>
      <div>
          <h3 style={{color:"#0043a4", marginBottom:"0"}}>Saved Search History</h3>
      </div>

      <Divider orientation="left"></Divider>

      <Table bordered dataSource={data}>
        <Table.Column key="sn" title="S/N" dataIndex="sn" />

        <Table.Column key="name"  title= "Airline" dataIndex="name" />
        {/* ****1*** */}
        <Table.Column
          key="airline"
          title="Airline"
          dataIndex="airline"
        />

        <Table.Column key="email" title="Email-Address" dataIndex="email" />

        <Table.Column
          key="role"
          title="Role"
          dataIndex="role"
        />

        <Table.Column
          key="phone"
          title="Phone"
          dataIndex="phone"
        />
        <Table.Column
          key="status"
          title="Status"
          dataIndex="status"
        />
        <Table.Column
          key="date"
          title="Date Created"
        />

        <Table.Column
          key="login"
          title="last Login"
        />
      </Table>
    </div>
    </>
  );
};

export default SearchHistory;

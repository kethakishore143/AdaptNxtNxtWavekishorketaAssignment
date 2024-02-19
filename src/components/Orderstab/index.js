import { Component } from "react";
import Sidenavbar from "../Sidenavbar";
import Ordertable from "../Ordertable";
import { IoMdPrint } from "react-icons/io";
import { RxThickArrowRight } from "react-icons/rx";
import { LuRefreshCcw } from "react-icons/lu";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";

import "./index.css";

const orderDetails = [
  {
    Add: "+",
    channelimgUrl:
      "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
    orderNo: "#TKN20203754",
    orderDate: "2022-05-04",
    city: "Luknow",
    customerName: "Abhishek Dixit",
    orderValue: "00.00",
    status: "pending",
    operation: "Active",
  },
  {
    Add: "+",
    channelimgUrl:
      "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
    orderNo: "#TKN20203753",
    orderDate: "2022-05-04",
    city: "Luknow",
    customerName: "Abhishek Dixit",
    orderValue: "00.00",
    status: "pending",
    operation: "Active",
  },
  {
    Add: "+",
    channelimgUrl:
      "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
    orderNo: "#TKN20203752",
    orderDate: "2022-05-04",
    city: "Luknow",
    customerName: "Abhishek Dixit",
    orderValue: "00.00",
    status: "pending",
    operation: "Active",
  },
];

let IsActive = true;

class Orderstab extends Component {
  state = { displayClass: false };

  displayOrders = () => {
    if (IsActive === true) {
      this.setState({ displayClass: true });
      IsActive = false;
    } else {
      this.setState({ displayClass: false });
      IsActive = true;
    }
  };

  renderOrders = () => {
    return (
      <div>
        <div className="order-close-container">
          <div className="order-close">
            <p>Orders</p>
            <IoClose />
          </div>

          <IoSettingsOutline />
        </div>
        <ul className="tabs-container">
          <li>
            <p>Pending</p>
          </li>
          <li>
            <p>Accepted</p>
          </li>
          <li>
            <p>AWB Created</p>
          </li>
          <li>
            <p>AWB Created</p>
          </li>
          <li>
            <p>Ready to Ship</p>
          </li>
          <li>
            <p>Shipped</p>
          </li>

          <li>
            <p>Completed</p>
          </li>
          <li>
            <p>Cancelled</p>
          </li>
        </ul>

        <ul className="order-container">
          <div className="buttons-container">
            <div className="quetation">
              <p>
                {" "}
                <LiaFileImportSolid />
                Import Oreders
              </p>
              <p>
                <RxThickArrowRight />
                Accept
              </p>
              <p>
                <IoMdPrint />
                Print
              </p>
            </div>
            <button
              type="button"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                border: "0px",
              }}
            >
              {" "}
              <LuRefreshCcw />
              Refresh
            </button>
          </div>
          <div className="transactions-table-container">
            <ul className="transactions-table">
              <li className="table-header">
                <p className="table-header-cell">Import Orders</p>
                <p className="table-header-cell">Channel</p>
                <p className="table-header-cell">Order No</p>
                <p className="table-header-cell">Order Date</p>
                <p className="table-header-cell">City</p>
                <p className="table-header-cell">Customer Name</p>
                <p className="table-header-cell">Order Value</p>
                <p className="table-header-cell">Status</p>
                <p className="table-header-cell">Operation</p>
              </li>
            </ul>
          </div>
          {orderDetails.map((eachItem) => (
            <Ordertable orderData={eachItem} />
          ))}
          <div className="page-count">
            <FaLessThan />
            <p>1</p>
            <FaGreaterThan />

            <select>
              <option>20/page</option>
            </select>
          </div>
        </ul>
      </div>
    );
  };

  render() {
    const { displayClass } = this.state;
    return (
      <div className="App-container">
        <Sidenavbar displayItem={this.displayOrders} />
        {displayClass ? this.renderOrders() : " "}
      </div>
    );
  }
}

export default Orderstab;

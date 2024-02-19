import { useState } from "react";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { BsCardList } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

import "./index.css";

const Sidenavbar = (props) => {
  const { displayItem } = props;
  const [navCollpase, setNavCollapse] = useState(false);
  const [smallNavCollpase, setSmallNavCollapse] = useState(false);
  const displayorder = (event) => {
    displayItem();
  };

  return (
    <div className="sidebar-content">
      <div
        className={`${smallNavCollpase ? "smallNav" : ""}sidebar-container  ${
          navCollpase ? "navCollaps" : ""
        }`}
      >
        <div className="nav-options">
          <AiOutlineDashboard className="nav-icons" />
          <h3>Dashboard</h3>
        </div>
        <div className="nav-options">
          <IoPricetagOutline />
          <h3>Inventory</h3>
        </div>
        <div className="nav-options" onClick={displayorder}>
          <BsCardList />

          <h3>Orders</h3>
        </div>
        <div className="nav-options">
          <MdOutlineLocalShipping />

          <h3>Shipping</h3>
        </div>
        <div className="nav-options">
          <IoShareSocialOutline />
          <h3>Channel</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;

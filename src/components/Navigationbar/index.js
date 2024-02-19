import React from "react";
import { useState } from "react";

import { RiIndentDecrease } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";

import "./index.css";

function Navigationbar() {
  const [navCollpase, setNavCollapse] = useState(false);
  const [smallNavCollpase, setSmallNavCollapse] = useState(false);

  return (
    <div className="container">
      <nav className="nav">
        <div className="menu-logo">
          <h2> Shopping</h2>
          <RiIndentDecrease
            className="menu-icon largeDeviceIcon"
            onClick={(e) => setNavCollapse(!navCollpase)}
          />
          <RiIndentDecrease
            className="menu-icon smallDeviceIcon"
            onClick={(e) => setNavCollapse(!navCollpase)}
          />
        </div>

        <ul>
          <li>
            <IoMoonOutline className="moon-icon" />
          </li>
          <li>
            <AiOutlineBell className="bell-icon" />
          </li>
          <li>
            <BsTranslate className="transilate-icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigationbar;

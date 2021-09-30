import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser } from "react-icons/fi";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <Nav className="col-md-2 d-md-block sidebar" activeKey="/">
      <Nav.Item className="sidebar-item">
        <NavLink className="nav-link" exact to="/">
          <span className="sidebar-icons-container">
            <FiHome className="sidebar-icons" />
          </span>
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item className="sidebar-item">
        <NavLink className="nav-link" exact to="/profile">
          <span className="sidebar-icons-container">
            <FiUser className="sidebar-icons" />
          </span>
          Profile
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default SideBar;

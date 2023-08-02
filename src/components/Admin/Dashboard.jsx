import React from "react";
import { FaClipboard, FaStore, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { Content, Div, SideNav, StyledDashboard } from "./StyledAdmin.js";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <SideNav>
        <h2>Dashboard</h2>

        <Div>
          <span>
            <FaTachometerAlt />
          </span>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/summary"
          >
            Summary
          </NavLink>
        </Div>

        <Div>
          <span>
            <FaStore />
          </span>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/products"
          >
            Products
          </NavLink>
        </Div>

        <Div>
          <span>
            <FaClipboard />
          </span>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/orders"
          >
            Orders
          </NavLink>
        </Div>

        <Div>
          <span>
            <FaUsers />
          </span>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/users"
          >
            Users
          </NavLink>
        </Div>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
};

export default Dashboard;

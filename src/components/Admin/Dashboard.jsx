import React, { Fragment } from "react";
import { FaClipboard, FaStore, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import {
  Content,
  Div,
  MobileNav,
  SideNav,
  Span,
  StyledDashboard,
} from "./StyledAdmin.js";

const Dashboard = () => {
  return (
    <Fragment>
      <MobileNav>
        <Span>
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
        </Span>
        <Span>
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
        </Span>
        <Span>
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
        </Span>
        <Span>
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
        </Span>
      </MobileNav>
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
    </Fragment>
  );
};

export default Dashboard;

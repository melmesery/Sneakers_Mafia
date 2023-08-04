import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChartBar, FaClipboard, FaUsers } from "react-icons/fa";
import { URL } from "../../API.js";
import {
  MainStates,
  Overview,
  SideStates,
  StyledSummary,
  Title,
  WidgetWraper,
} from "./StyledAdmin.js";
import AllTimeData from "./Summary-Components/AllTimeData.jsx";
import Charts from "./Summary-Components/Charts.jsx";
import Transactions from "./Summary-Components/Transactions.jsx";
import Widget from "./Summary-Components/Widget.jsx";

const Summary = () => {
  const [users, setUsers] = useState([]);
  const [usersPerc, setUsersPerc] = useState(0);
  const [orders, setOrders] = useState([]);
  const [ordersPerc, setOrdersPerc] = useState(0);
  const [income, setIncome] = useState([]);
  const [incomePerc, setIncomePerc] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${URL}/user/stats`);
        setUsers(data);
        if (data[0] && data[1]) {
          setUsersPerc(100 * ((data[0].total - data[1].total) / data[1].total));
        } else {
          setUsersPerc(0);
        }
      } catch (error) {
        return error;
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${URL}/order/stats`);
        setOrders(data);
        if (data[0] && data[1]) {
          setOrdersPerc(
            100 * ((data[0].total - data[1].total) / data[1].total)
          );
        } else {
          setOrdersPerc(0);
        }
      } catch (error) {
        return error;
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${URL}/order/earnings`);
        setIncome(data);
        console.log(data);
        if (data[0] && data[1]) {
          setIncomePerc(
            100 * ((data[0].total - data[1].total) / data[1].total)
          );
        } else {
          setIncomePerc(0);
        }
      } catch (error) {
        return error;
      }
    }
    fetchData();
  }, []);

  const data = [
    {
      icon: <FaUsers />,
      digits: users[0] && users[1] ? users[0].total : 0,
      isMoney: false,
      title: "Users",
      color: "rgb(102, 108, 255)",
      bgcolor: "rgba(102, 108, 255, 0.12)",
      percentage: usersPerc,
    },
    {
      icon: <FaClipboard />,
      digits: orders[0]?.total,
      isMoney: false,
      title: "Orders",
      color: "rgb(38, 198, 249)",
      bgcolor: "rgba(38, 198, 249, 0.12)",
      percentage: ordersPerc,
    },
    {
      icon: <FaChartBar />,
      digits: income[0]?.total / 100,
      isMoney: true,
      title: "Earnings",
      color: "rgb(253, 181, 40)",
      bgcolor: "rgba(253, 181, 40, 0.12)",
      percentage: incomePerc,
    },
  ];
  return (
    <StyledSummary>
      <MainStates>
        <Overview>
          <Title>
            <h3>Overview</h3>
            <p>How your shop is performing compared to the previous month.</p>
          </Title>
          <WidgetWraper>
            {data.map((data, index) => (
              <Widget key={index} data={data} />
            ))}
          </WidgetWraper>
        </Overview>
        <Charts />
      </MainStates>
      <SideStates>
        <Transactions />
        <AllTimeData />
      </SideStates>
    </StyledSummary>
  );
};

export default Summary;

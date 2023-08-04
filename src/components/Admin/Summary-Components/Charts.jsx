import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { URL } from "../../../API.js";
import Spinner from "../../Spinner.jsx";
import { StyledChart } from "../StyledAdmin.js";

const Charts = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get(`${URL}/order/week-sales`);
        const weekSales = data.map((item) => {
          const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

          return {
            day: DAY[item._id - 1],
            amount: item.total / 100,
          };
        });
        setSales(weekSales);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <StyledChart>
          <h3>Last 7 Days Earnings(US $)</h3>
          <ResponsiveContainer id="chart_container">
            <LineChart id="lineChart" data={sales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </StyledChart>
      )}
    </Fragment>
  );
};

export default Charts;

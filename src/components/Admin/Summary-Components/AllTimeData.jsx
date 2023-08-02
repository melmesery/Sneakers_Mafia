import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../API.js";
import { Data, Info, Key, Main } from "../StyledAdmin.js";

const AllTimeData = () => {
  const [allEarnings, setAllEarnings] = useState({});
  const { items } = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${URL}/order/all-time-earnings`);
        setAllEarnings(data);
      } catch (error) {
        return error;
      }
    }
    fetchData();
  }, []);

  return (
    <Main>
      <h3>All Time</h3>
      <Info>
        <Key>Users</Key>
        <Data>{user?.list?.length}</Data>
      </Info>
      <Info>
        <Key>Products</Key>
        <Data>{items?.length}</Data>
      </Info>
      <Info>
        <Key>Orders</Key>
        <Data>{order?.list?.length}</Data>
      </Info>
      <Info>
        <Key>Earnings</Key>
        <Data>{`$${(allEarnings[0]?.total / 100).toLocaleString()}`}</Data>
      </Info>
    </Main>
  );
};

export default AllTimeData;

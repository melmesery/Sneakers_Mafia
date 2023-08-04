import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { URL } from "../../../API.js";
import Spinner from "../../Spinner.jsx";
import { StyledTransactions, Transaction } from "../StyledAdmin.js";
import Pagination from "../../../utilis/Pagination.jsx";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentOrders = orders.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get(`${URL}/order/?new=true`);
        setOrders(data.orders);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    }
    fetchData();
  }, []);

  return (
    <StyledTransactions>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h3>Latest Transcations</h3>
          {currentOrders?.map((order, index) => (
            <Transaction key={index}>
              <p>{order.shipping.name}</p>
              <p>${(order.total / 100).toLocaleString()}</p>
              <p>{moment(order.createdAt).fromNow()}</p>
            </Transaction>
          ))}
        </Fragment>
      )}
      <Pagination />
    </StyledTransactions>
  );
};

export default Transactions;

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { URL } from "../../API.js";
import Footer from "../Footer.jsx";
import Services from "../Services.jsx";
import Spinner from "../Spinner.jsx";
import {
  Address,
  Delivered,
  Dispatched,
  Hr,
  Item,
  Items,
  OrderContainer,
  Pending,
  Section,
  StyledOrder,
} from "./StyledDetails.js";

const Order = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const { data } = await axios.get(`${URL}/order/${params.id}`);
        setOrder(data.order);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    }
    fetchData();
  }, [params.id]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <StyledOrder>
          <h2>Order Details</h2>
          <OrderContainer>
            <Row>
              <Col md={6}>
                <Items>
                  {order.products?.map((product, index) => {
                    return (
                      <Item key={index}>
                        <img src={product.image?.secure_url} />
                      </Item>
                    );
                  })}
                </Items>
              </Col>
              <Hr />

              <Col md={3}>
                <Section>
                  <h5>Product Details</h5>
                  {order.products?.map((product, index) => {
                    return (
                      <div key={index}>
                        <Address>
                          <span>Id</span>
                          <p>: {product._id}</p>
                        </Address>
                        <Address>
                          <span>Product</span>
                          <p>: {product.name}</p>
                        </Address>
                        <Address>
                          <span>Quantity</span>
                          <p>: {product.cartQuantity}</p>
                        </Address>
                        <Address>
                          <span>Item Price</span>
                          <p>: ${product.price}</p>
                        </Address>
                      </div>
                    );
                  })}
                </Section>
                <Hr />

                <Section>
                  <h5>Total Fees</h5>
                  <Address>
                    <span>Shipping Fees</span>
                    <p>
                      :{" "}
                      {"$" +
                        ((order.total - order.subtotal) / 100).toLocaleString()}
                    </p>
                  </Address>
                  <Address>
                    <span>Total Price</span>
                    <p>: {"$" + (order.total / 100).toLocaleString()}</p>
                  </Address>
                </Section>
                <Hr />
              </Col>

              <Col md={3}>
                <Section>
                  <p>
                    <h5> Delivery Status</h5>
                    {order.delivery_status === "pending" ? (
                      <Pending>Pending </Pending>
                    ) : order.delivery_status === "dispatched" ? (
                      <Dispatched>Dispatched</Dispatched>
                    ) : order.delivery_status === "delivered" ? (
                      <Delivered>Delivered</Delivered>
                    ) : (
                      "Error"
                    )}
                  </p>
                </Section>
                <Hr />

                <Section>
                  <h5>Shipping Details</h5>

                  <Address>
                    <span>Customer</span>
                    <p>: {order.shipping?.name}</p>
                  </Address>
                  <Address>
                    <span>City</span>
                    <p>: {order.shipping?.address.city}</p>
                  </Address>
                  <Address>
                    <span>Email</span>
                    <p>: {order.shipping?.email}</p>
                  </Address>
                </Section>
              </Col>
            </Row>
          </OrderContainer>
        </StyledOrder>
      )}
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Order;

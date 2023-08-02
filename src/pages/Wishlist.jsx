import React, { Fragment } from "react";
import Col from "react-bootstrap/esm/Col.js";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx";
import { addToCart } from "../store/cartSlice.js";
import { wishlistDelete } from "../store/wishlistSlice.js";
import {
  Add,
  Buttons,
  Details,
  Price,
  Product,
  Remove,
  WishlistContainer,
} from "./Styles/StyledWishlist.js";

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const reversedItems = [...items].reverse();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDelete = (id) => {
    dispatch(wishlistDelete(id));
  };

  return (
    <Fragment>
      <WishlistContainer>
        <Container>
          {reversedItems?.length === 0 ? (
            <h2>Your wishlist is empty</h2>
          ) : (
            <h2>Wishlist</h2>
          )}
          <Row>
            {reversedItems &&
              reversedItems.map((item, index) => {
                return (
                  <Col xs={6} md={3} key={index}>
                    <Product>
                      <img
                        src={item?.image.secure_url}
                        alt={item.name}
                        onClick={() => navigate(`/product/${item._id}`)}
                      />
                      <Details>
                        <h6>{item?.brand}</h6>
                        <Price>${item?.price}</Price>
                        <h5>{item?.name}</h5>

                        <Buttons>
                          <Add onClick={() => handleAddToCart(item)}>
                            Cart
                          </Add>
                          <Remove onClick={() => handleDelete(item?.ID)}>
                            Remove
                          </Remove>
                        </Buttons>
                      </Details>
                    </Product>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </WishlistContainer>
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Wishlist;

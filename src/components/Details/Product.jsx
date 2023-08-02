import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { URL } from "../../API.js";
import { addToCart } from "../../store/cartSlice.js";
import Footer from "../Footer.jsx";
import MenSwiper from "../MenSwiper.jsx";
import Services from "../Services.jsx";
import Size from "../Size.jsx";
import Spinner from "../Spinner.jsx";
import WomenSwiper from "../WomenSwiper.jsx";
import {
  Brand,
  Buttons,
  ImageContainer,
  Men,
  NP,
  Price,
  ProductDetails,
  StyledProduct,
  Women,
} from "./StyledDetails.js";

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const { data } = await axios.get(`${URL}/product/${params.id}`);
        setProduct(data.product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    }
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (id) => {
    dispatch(wishlistCreate(id));
  };

  return (
    <Fragment>
      <StyledProduct>
        {loading ? (
          <Spinner />
        ) : (
          <Container>
            <Row>
              <Col md={6}>
                <ImageContainer>
                  <Brand>{product.brand}</Brand>
                  <img src={product.image?.secure_url} alt={product.name} />
                </ImageContainer>
              </Col>
              <Col md={6}>
                <ProductDetails>
                  <NP>
                    <h3>{product.name}</h3>
                    <Price>${product.price?.toLocaleString()}</Price>
                  </NP>
                  <p>{product.desc}</p>
                  <Size />
                  <Buttons>
                    <button onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </button>
                    <button onClick={() => handleAddToWishlist(product._id)}>
                      Wishlist
                    </button>
                  </Buttons>
                </ProductDetails>
              </Col>
            </Row>
          </Container>
        )}
      </StyledProduct>
      {product.gender === "male" && (
        <Men>
          <Container>
            <h3>You might also like</h3>
            <MenSwiper />
          </Container>
        </Men>
      )}
      {product.gender === "female" && (
        <Women>
          <Container>
            <h3>You might also like</h3>
            <WomenSwiper />
          </Container>
        </Women>
      )}
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Product;

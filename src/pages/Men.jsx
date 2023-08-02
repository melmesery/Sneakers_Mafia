import React, { Fragment, useState } from "react";
import men from "../assets/men.webp";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Services from "../components/Services.jsx";
import { useGetAllProductsQuery } from "../store/productsApi.js";
import { Gender, Poster } from "./Styles/StyledGender.js";
import Spinner from "../components/Spinner.jsx";
import Col from "react-bootstrap/esm/Col.js";
import Pagination from "../utilis/Pagination.jsx";
import { Container, Row } from "react-bootstrap";

const Men = ({ products }) => {
  const { error, isLoading } = useGetAllProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const product = currentPosts.map((product, index) => {
    return (
      <Col xs={6} md={3} key={index}>
        <ProductCard product={product} />
      </Col>
    );
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <Gender>
        <Poster src={men} />
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>An error occured..</p>
        ) : (
          <Fragment>
            <h1>Men</h1>
            <Container fluid>
              <Row>{product}</Row>
            </Container>
          </Fragment>
        )}
      </Gender>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Men;

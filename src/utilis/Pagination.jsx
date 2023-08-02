import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number, index) => {
        const isSelected = number === selectedPage;
        return (
          <Page key={index} isSelected={isSelected}>
            <Link
              to={`/men?page=${number}`}
              onClick={() => {
                paginate(number);
                setSelectedPage(number);
              }}
            >
              {number}
            </Link>
          </Page>
        );
      })}
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  list-style: none;

  @media (max-width: 665px) {
    gap: 10px;
    padding: 20px 0;
  }
`;

const Page = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isSelected ? "rgba(255, 0, 0, 0.508)" : "rgb(219, 219, 222)"};

  a {
    color: #000;
    text-decoration: none;
  }

  @media (max-width: 665px) {
    width: 30px;
    height: 30px;
    
    a {
      font-size: 0.8rem;
    }
  }
`;

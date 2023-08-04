import React from "react";
import { styled } from "styled-components";

const CheckEmail = () => {
  return (
    <Check>
      <p>Please, check your email</p>
    </Check>
  );
};

export default CheckEmail;

const Check = styled.div`
  width: 35%;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  padding: 2rem;
  background: #f4f4f4;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  p {
    font-size: 2rem;
    margin-bottom: 0;
  }

  @media (max-width: 660px) {
    width: 80%;
    margin-top: 50px;

    p {
      font-size: 1rem;
    }
  }
`;

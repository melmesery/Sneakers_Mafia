import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const EmailConfirmation = () => {
  const navigate = useNavigate();
  return (
    <Confirmation>
      <p>Email confirmed successfully</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </Confirmation>
  );
};

export default EmailConfirmation;

const Confirmation = styled.div`
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
  }

  button {
    width: 100px;
    margin: 0 auto;
    border: none;
    color: rgb(13, 86, 158);
    background: rgba(13, 86, 158, 0.12);
    border-radius: 10px;
  }
`;

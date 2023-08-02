import styled from "styled-components";

export const CartContainer = styled.div`
  min-height: calc(100vh - 65px);
  padding: 2rem 4rem;

  h2 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 665px) {
    padding: 20px;
  }
`;

export const Empty = styled.div`
  font-size: 20px;
  margin-top: 2rem;
  color: rgb(84, 84, 84);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 665px) {
    font-size: 15px;
  }
`;

export const Shopping = styled.div`
  margin-top: 1rem;

  a {
    color: gray;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a span {
    margin-left: 0.5rem;
  }
`;

export const DesktopCart = styled.div`
  @media (max-width: 665px) {
    display: none;
  }
`;

export const Titles = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  margin: 2rem 0 1rem 0;
  column-gap: 0.5rem;
  background: #f0f0f0;
  padding: 1rem 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0;
  }

  @media (max-width: 665px) {
    display: flex;
  }
`;

export const Title = styled.h3`
  padding-left: 0.5rem;
`;

export const Total = styled.h3`
  padding-right: 0.5rem;
  justify-self: right;
`;

export const CartItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  padding: 1rem 2rem;
  margin-bottom: 10px;
`;

export const Product = styled.div`
  display: flex;

  img {
    width: 100px;
    max-width: 100%;
    margin-right: 1rem;
  }

  h3 {
    font-weight: 600;
  }

  button {
    border: none;
    outline: none;
    margin-top: 0.7rem;
    cursor: pointer;
    background: none;
    color: rgba(255, 0, 0, 0.499);
  }

  button:hover {
    color: rgba(255, 0, 0, 0.499);
  }
`;

export const Price = styled.div`
  font-weight: 600;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 130px;
  max-width: 100%;
  border: solid silver 1px;
  border-radius: 25px;
  font-weight: 600;

  button {
    border: none;
    outline: none;
    background: none;
    font-weight: 600;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
  }
`;

export const Count = styled.div`
  padding: 0.7rem 0;
`;

export const TotalPrice = styled.div`
  padding-right: 0.5rem;
  justify-self: right;
  font-weight: 700;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2rem;

  @media (max-width: 655px) {
    width: 100%;
    display: grid;
    padding-top: 1rem;
  }
`;

export const Clear = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: none;
  border-radius: 20px;
  color: rgb(255, 77, 73);
  background: rgba(255, 77, 73, 0.12);
  outline: none;
  cursor: pointer;

  @media (max-width: 655px) {
    width: 95px;
    height: auto;
  }
`;

export const Checkout = styled.div`
  width: 270px;

  p {
    font-size: 14px;
    font-weight: 200;
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-weight: 400;
    letter-spacing: 1.15px;
    color: rgb(102, 108, 255);
    background: rgba(102, 108, 255, 0.12);
    border: none;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 665px) {
    width: 100%;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  @media (max-width: 665px) {
    margin-top: 20px;
  }
`;

export const Amount = styled.span`
  font-weight: 700;
`;

export const Login = styled.button`
  background-color: yellow;
  color: black;
`;

// Mobile

export const MobileCart = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 655px) {
    display: block;
  }
`;

export const MiniCart = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px;

  img {
    width: 80px;
  }

  h5 {
    text-transform: capitalize;
    font-size: 0.8rem;
    color: orange;
  }

  h3 {
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
    font-size: 0.8rem;
    color: green;
  }
`;

export const Act = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    font-size: 0.9rem;
    color: red;
  }
`;

export const DI = styled.div`
  display: flex;
  gap: 15px;
  border: solid silver 1px;
  padding: 0 10px;
  border-radius: 20px;

  span,
  p {
    margin-bottom: 0;
    cursor: pointer;
  }
`;

import styled from "styled-components";

// Product

export const StyledProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 665px) {
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 665px) {
    img {
      margin-top: -20px;
    }
  }
`;

export const ProductDetails = styled.div`
  flex: 2;
  margin-left: 2rem;

  h3 {
    font-size: 35px;
    font-weight: 900;
  }

  p {
    width: 70%;
  }

  @media (max-width: 665px) {
    margin-left: 0;
    margin-top: 20px;

    h3 {
      font-size: 15px;
    }

    p {
      width: 100%;
      font-size: 0.9rem;
    }
  }
`;

export const NP = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 665px) {
    display: grid;
  }
`;

export const Price = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 25px;
  color: red;

  @media (max-width: 665px) {
    font-size: 15px;
  }
`;

export const Brand = styled.p`
  color: #000;
  text-transform: capitalize;
  font-size: 1.3rem;
  text-decoration: underline cadetblue;

  @media (max-width: 665px) {
    font-size: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;

  button {
    width: 20%;
    height: 25px;
    margin-top: 2rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
  }

  :nth-child(1) {
    color: rgb(185, 185, 229);
    background: rgba(185, 185, 229, 0.12);
  }

  :nth-child(2) {
    color: rgb(25, 241, 18);
    background: rgba(25, 241, 18, 0.12);
  }

  @media (max-width: 665px) {
    gap: 10px;

    button {
      margin-top: 0.5rem;
      width: 35%;
      font-size: 0.8rem;
    }
  }
`;

export const Men = styled.div`
  padding: 50px 0;
`;

export const Women = styled.div`
  padding: 50px 0;
`;

// Order

export const StyledOrder = styled.div`
  margin: 3rem;

  h2 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 10px;
    font-weight: 900;
  }

  @media (max-width: 660px) {
    margin: 1rem;
  }
`;

export const OrderContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
`;

export const Section = styled.div`
  margin-bottom: 25px;
`;

export const Items = styled.div`
  span {
    margin-right: 1.5rem;
    &:first-child {
      font-weight: bold;
    }
  }
`;

export const Item = styled.div`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;

  img {
    width: 70%;
    margin-top: -30px;
  }
`;

export const Hr = styled.hr`
  display: none;

  @media (max-width: 660px) {
    display: block;
  }
`;
export const Pending = styled.div`
  width: 25%;
  text-align: center;
  color: rgb(253, 181, 40);
  background: rgba(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;

export const Dispatched = styled.div`
  width: 25%;
  text-align: center;
  color: rgb(38, 198, 249);
  background: rgba(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;

export const Delivered = styled.div`
  width: 25%;
  text-align: center;
  color: rgb(102, 108, 255);
  background: rgba(102, 108, 255, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;

export const Address = styled.div`
  display: flex;
  gap: 5px;

  span {
    text-decoration: underline chartreuse;
  }
`;

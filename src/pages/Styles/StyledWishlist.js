import styled from "styled-components";

export const WishlistContainer = styled.div`
  min-height: calc(100vh - 65px);
  display: block;
  justify-content: center;
  padding: 40px 0;

  h2 {
    text-align: center;
    margin: 30px 0;
    font-weight: 900;
  }

  @media (max-width: 665px) {
    padding: 0;

    h2 {
      margin-bottom: 15px;
    }
  }
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: 250px;
  max-width: 100%;
  height: 320px;
  background: #f4f4f7;
  transition: 1s;
  cursor: pointer;
  border-radius: 10px;

  img {
    width: 80%;
    border-radius: 10px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 665px) {
    height: auto;
    background: #f4f4f7;
  }

  img {
    width: 70%;
  }
`;

export const Details = styled.div`
  padding: 15px;

  h6 {
     text-transform: capitalize;
    text-decoration: underline darkcyan;
  }

  @media (max-width: 665px) {
    h6 {
      font-size: 0.8rem;
    }

    h5 {
      height: 50px;
      font-size: 0.8rem;
    }
  }
`;

export const Price = styled.span`
  margin-bottom: 10px !important;
  font-size: 0.8rem;
  color: green;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  text-align: center;

  @media (max-width: 665px) {
    gap: 5px;
    margin-top: 5px;
  }
`;

export const Add = styled.span`
  color: rgb(33, 30, 30);
  background: rgba(33, 30, 30, 0.12);
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  @media (max-width: 665px) {
    padding: 0 10px;
    font-size: 0.5rem;
  }
`;

export const Remove = styled.span`
  color: rgb(255, 77, 73);
  background: rgba(255, 77, 73, 0.12);
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  @media (max-width: 665px) {
    padding: 0 10px;
    font-size: 0.5rem;
  }
`;

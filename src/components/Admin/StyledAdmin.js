import styled from "styled-components";

export const AdminHeaders = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrimaryButton = styled.button`
  padding: 9px 12px;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;

export const ImagePreview = styled.div`
  img {
    width: 70%;
  }

  @media (max-width: 660px) {
    img {
      width: 250px;
    }
  }
`;

export const Head = styled.div`
  display: none;

  @media (max-width: 660px) {
    display: block;
    text-align: center;
    margin: 20px 0;
  }
`;

// Summary

export const StyledSummary = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 660px) {
    display: grid;
    justify-content: center;
    padding-bottom: 20px;
  }
`;

export const MainStates = styled.div`
  flex: 2;
  width: 100%;
`;

export const Title = styled.div`
  p {
    font-size: 14px;
    color: rgba(234, 234, 234, 0.68);
  }
`;

export const Overview = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 234, 0.87);
  width: 100%;
  padding: 1.5rem;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 660px) {
    padding: 1rem;
  }
`;

export const WidgetWraper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SideStates = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;

  @media (max-width: 660px) {
    margin-left: 0;
  }
`;

// Edit Product

export const Edit = styled.button`
  width: 60px !important;
  color: rgb(75, 112, 226);
  background: rgba(75, 112, 226, 0.12);
  padding: 3px 5px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

export const StyledEditProduct = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 660px) {
    display: grid;
    justify-content: center;
  }
`;

// Dashboard

export const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

export const MobileNav = styled.div`
  display: none;

  @media (max-width: 660px) {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background: #f4f4f4;
    margin-bottom: 10px;
  }
`;

export const Span = styled.div`
  display: flex;
  gap: 5px;
  font-size: 0.8rem;

  a {
    text-decoration: none;
  }
`;

export const SideNav = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
  width: 250px !important;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  h2 {
    font-weight: 900;
    margin-bottom: 1rem;
    padding: 0;
    text-transform: capitalize;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }

  @media (max-width: 660px) {
    display: none;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  span {
    margin-top: -20px;
  }
`;

export const Content = styled.div`
  margin-left: 100px;
  padding: 2rem 3rem;
  width: 100%;

  @media (max-width: 660px) {
    margin-left: 0;
    padding: 0 15px;
  }
`;

// Create Product

export const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 660px) {
    display: grid;
    justify-content: center;
    padding: 20px 0;
  }
`;

// All Time Data

export const Main = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  margin-top: 1.5rem;
  padding: 1rem;
  font-size: 14px;

  @media (max-width: 660px) {
    margin-top: 20px;

    /* h3 {
      font-size: 0.8rem;
    } */
  }
`;

export const Info = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0.3rem;
  border-radius: 3px;
  background: rgba(38, 198, 249, 0.12);

  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`;

export const Key = styled.div`
  flex: 1;
`;

export const Data = styled.div`
  flex: 1;
  font-weight: 700;
`;

// Charts

export const StyledChart = styled.div`
  width: 100%;
  /* height: 300px; */
  height: auto;
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid rgba(48, 51, 78, 0.2);

  h3 {
    margin-bottom: 1rem;
  }

  @media (max-width: 660px) {
    padding: 0;
    font-size: 10px;
  }
`;

// Transactions

export const StyledTransactions = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  padding: 1rem;

  @media (max-width: 660px) {
    margin-top: 20px;
  }
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 1rem;
  padding: 0.5rem;
  background: rgba(38, 198, 249, 0.12);

  p {
    margin-bottom: 0;
  }

  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`;

// Widget

export const StyledWidget = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: ${({ color }) => color};
  background: ${({ bgcolor }) => bgcolor};
  border-radius: 3px;
  font-size: 20px;

  @media (max-width: 660px) {
    margin-right: 10px;
    margin-left: 0rem;
    padding: 0.2rem;
    font-size: 10px;
  }
`;

export const Text = styled.div`
  h3 {
    font-weight: 900;
  }
  p {
    font-size: 14px;
    color: rgba(234, 234, 234, 0.68);
  }

  @media (max-width: 660px) {
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 9px;
    }
  }
`;

export const Percentage = styled.div`
  margin-left: 0.5rem;
  font-size: 14px;
  color: ${({ ispositive }) =>
    ispositive ? "rgb(114, 225, 40)" : "rgb(255, 77, 73)"};

  @media (max-width: 660px) {
    margin-left: 0.2rem;
    font-size: 9px;
  }
`;

// Order List

export const OrderActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: #fff;
    cursor: pointer;
  }
`;

export const Pending = styled.div`
  color: rgb(253, 181, 40);
  background: rgba(253, 181, 40, 0.12);
  padding: 3px 5px;
  font-size: 14px;
`;

export const Dispatched = styled.div`
  color: rgb(38, 198, 249);
  background: rgba(38, 198, 249, 0.12);
  padding: 3px 5px;
  font-size: 14px;
`;

export const Delivered = styled.div`
  color: rgb(102, 108, 255);
  background: rgba(102, 108, 255, 0.12);
  padding: 3px 5px;
  font-size: 14px;
`;

export const DispatchBtn = styled.button`
  background: rgb(38, 198, 249);
`;

export const DeliveryBtn = styled.button`
  background: rgb(102, 108, 255);
`;

export const OrderView = styled.button`
  background: rgb(114, 225, 40);
`;

// Product List

export const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

export const ProductActions = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  button: {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const Delete = styled.button`
  width: 60px !important;
  color: rgb(255, 77, 73);
  background: rgba(255, 77, 73, 0.12);
  padding: 3px 5px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

export const ProductView = styled.button`
  width: 60px !important;
  color: rgb(114, 225, 40);
  background: rgba(114, 225, 40, 0.12);
  padding: 3px 5px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

// User List

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.button`
  color: rgb(255, 77, 73);
  background: rgba(255, 77, 73, 0.12);
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

export const Admin = styled.div`
  color: rgb(253, 181, 40);
  background: rgba(253, 181, 40, 0.12);
  padding: 3px 5px;
  font-size: 14px;
`;

export const Customer = styled.div`
  color: rgb(38, 198, 249);
  background: rgba(38, 198, 249, 0.12);
  padding: 3px 5px;
  font-size: 14px;
`;

export const Blocking = styled.div`
  display: flex;
  gap: 15px;
`;

export const Cancel = styled.button`
  color: rgb(38, 45, 249);
  background: rgba(38, 45, 249, 0.12);
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
`;

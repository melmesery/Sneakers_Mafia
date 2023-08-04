import styled from "styled-components";

export const Checkout = styled.div`
  min-height: calc(100vh - 65px);
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }

  @media (max-width: 665px) {
    min-height: 80vh;
    padding: 0 10px;

    h2 {
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
      margin-bottom: 0;
    }
  }
`;

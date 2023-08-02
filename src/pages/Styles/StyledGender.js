import styled from "styled-components";

export const Gender = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
    margin: 40px 0;
  }

  @media (max-width: 665px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

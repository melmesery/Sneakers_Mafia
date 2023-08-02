import styled from "styled-components";

export const Form = styled.div`
  min-height: calc(100vh - 65px) !important;
  display: grid;
  align-items: center;
  justify-content: center;

  @media (max-width: 665px) {
    min-height: calc(100vh - 40px) !important;
  }
`;

export const Error = styled.div`
  width: 350px;
  height: auto;
  padding: 15px;
  border-radius: 0 !important;
  border: 1px red solid;
  background: rgba(255, 0, 0, 0.07);
  margin-bottom: 10px;

  p {
    margin-bottom: 0;
  }

  @media (max-width: 665px) {
    width: 300px;
    padding: 10px;
  }
`;

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  color: red;
`;

export const ErrorIcon = styled.div`
  font-size: 2rem;
  margin-top: -10px;

  @media (max-width: 665px) {
    font-size: 1.5rem;
    margin-top: -5px;
  }
`;

export const StyledForm = styled.form`
  max-width: 350px;
  width: 100%;
  padding: 2rem;
  background: #f4f4f7;

  h2 {
    margin-bottom: 1rem;
  }

  button,
  input {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;

    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }

  button {
    cursor: pointer;
    background: #f1b902;
    border: none;
    &:focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;
  }

  @media (max-width: 665px) {
    max-width: 300px;
    padding: 1rem;
  }
`;

export const Admin = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 25px;
  cursor: pointer;
`;

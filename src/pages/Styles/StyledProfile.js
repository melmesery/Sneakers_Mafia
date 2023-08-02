import styled from "styled-components";

export const StyledProfile = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 665px) {
    margin: 1rem;
  }
`;

export const ProfileContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  border: solid 2px #f4f4f7;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  border-radius: 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  label {
    margin-bottom: 0.2rem;
    color: gray;
  }

  input {
    width: 300px;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    border-radius: 15px;
    background: #f4f4f7;
  }

  @media (max-width: 665px) {
    label {
      font-size: 0.9rem;
    }

    input {
      width: 220px;
      font-size: 0.9rem;
    }
  }
`;

export const Admin = styled.div`
  color: rgb(253, 181, 40);
  background: rgba(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 1rem;

  @media (max-width: 665px) {
    font-size: 10px;
  }
`;

export const Customer = styled.div`
  color: rgb(38, 198, 249);
  background: rgba(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 1rem;

  @media (max-width: 665px) {
    font-size: 10px;
  }
`;

export const Update = styled.button`
  color: rgb(96, 239, 44);
  border: rgb(96, 239, 44) solid 1px;
  background: rgba(96, 239, 44, 0.12);
  border: none;
  border-radius: 20px;
  padding: 1px 10px;

  @media (max-width: 665px) {
    font-size: 10px;
  }
`;

export const Password = styled.button`
  color: rgb(239, 96, 44);
  background: rgba(239, 96, 44, 0.12);
  border: none;
  border-radius: 20px;
  padding: 1px 10px;
  margin-top: 15px;

  @media (max-width: 665px) {
    font-size: 10px;
  }
`;

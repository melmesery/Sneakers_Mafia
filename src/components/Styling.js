import styled from "styled-components";

// Brands

export const BrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background: #f4f4f7;

  @media (max-width: 665px) {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background: #f4f4f7;
  }
`;

export const Brand = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 5rem;

  @media (max-width: 665px) {
    font-size: 1.5rem;
  }
`;

// Footer

export const FooterContainer = styled.div`
  min-height: 60vh;
  background: #000;
  text-align: center;
  padding: 30px 0;

  h1 {
    color: #fff;
    margin-bottom: 50px;
  }

  p {
    color: #ffc8bc;
    font-weight: 900;
  }

  span {
    color: #fff;
  }

  @media (max-width: 665px) {
    padding: 30px 5px;

    p {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.6rem;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
`;

export const Social = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;

  @media (max-width: 665px) {
    font-size: 1.3rem;
    height: 30px;
    width: 30px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 665px) {
    display: grid;
  }
`;

export const CopyRight = styled.span`
  font-size: 0.9rem;
`;

// Home

export const MenSection = styled.div`
  padding-top: 50px;
`;

export const WomenSection = styled.div`
  padding-top: 50px;
`;

// ProductCard

export const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: 250px;
  max-width: 100%;
  height: 350px;
  background: #f4f4f7;
  transition: 1s;
  cursor: pointer;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: #000;
  }

  img {
    display: block;
    width: 80%;
    border-radius: 10px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 665px) {
    width: 100%;
    height: 280px;
    margin: 0.5rem auto;
  }
`;

export const Details = styled.div`
  padding: 15px;

  h6 {
    text-transform: capitalize;
    text-decoration: underline darkcyan;
  }

  button {
    position: absolute;
    left: 90px;
    bottom: 5px;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 25px;
    margin-top: 2rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #dbdbde;
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 665px) {
    padding: 10px;

    h6 {
      font-size: 0.8rem;
    }

    h5 {
      font-size: 0.9rem;
    }

    button {
      left: 65px;
      bottom: 5px;
      font-size: 0.6rem;
    }
  }
`;

export const ProductBrand = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wishlist = styled.div`
  font-size: 2rem;
  margin-top: -15px;

  @media (max-width: 665px) {
    font-size: 1.5rem;
  }
`;

export const Price = styled.span`
  color: #4b70e2;
  font-weight: 900;
  margin-bottom: 1rem;
`;

// Recommended

export const Recomendation = styled.div`
  padding-top: 50px;
`;

// Services

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 30px 0;
  text-align: center;
  background: #f4f4f7;

  h5 {
    font-weight: 900;
    margin-top: 30px;
  }

  span {
    font-size: 50px;
  }

  @media (max-width: 665px) {
    display: grid;
    gap: 10px;
    padding: 15px 0;
  }

  h5 {
    margin-top: 15px;
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
  }

  span {
    font-size: 40px;
  }
`;

// Size

export const Fit = styled.div`
  select {
    padding: 0 10px;
    outline: none;
    border: 1px solid rgb(182, 182, 182);
    color: rgb(95, 95, 95);
    cursor: pointer;
  }

  @media (max-width: 665px) {
    select {
      padding: 0 5px;
    }
  }
`;

// Navbar

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background: #000;
  padding: 0 30px;

  @media (max-width: 665px) {
    height: 3rem;
    padding: 0 10px;
  }
`;

export const Logo = styled.div`
  font-size: 30px;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 665px) {
    font-size: 15px;
  }
`;

export const ToggleMenu = styled.div`
  position: fixed;
  width: 150px;
  padding: 30px 10px;
  display: grid;
  height: auto;
  top: 80px;
  right: 40px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1000;

  a {
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    margin-bottom: 20px !important;
  }

  @media (max-width: 665px) {
    width: 120px;
    padding: 20px 10px;
    top: 45px;
    right: 15px;

    a {
      font-size: 0.8rem;
    }
  }
`;

export const Go = styled.div`
  margin-bottom: 20px;

  span {
    margin-right: 10px;
  }

  &:hover {
    background: rgba(238, 63, 63, 0.12);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px !important;

  @media (max-width: 665px) {
    gap: 15px;
  }
`;

export const NavbarIcon = styled.div`
  position: relative;
  font-size: 20px;
  color: #fff;

  @media (max-width: 665px) {
    font-size: 15px;
  }
`;

export const NavbarQuantity = styled.div`
  position: absolute;
  top: -6px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff00006d;
  font-size: 10px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 665px) {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    font-size: 8px;
  }
`;

export const Profile = styled.span`
  font-size: 20px;
  color: #fff;

  @media (max-width: 665px) {
    margin-top: -6px;
    font-size: 15px;
  }
`;

export const Logout = styled.button`
  color: rgb(238, 63, 63);
  background: rgba(238, 63, 63, 0.12);
  padding: 2px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 665px) {
    font-size: 15px;
  }
`;

export const MenuBtn = styled.span`
  color: #fff;
  font-size: 30px;
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 665px) {
    font-size: 15px;
  }
`;

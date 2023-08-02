import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  CopyRight,
  FooterContainer,
  Links,
  Social,
  SocialContainer,
} from "./Styling.js";

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Sneakers Mafia</h1>

      <p>Follow Us</p>
      <SocialContainer>
        <Social>
          <BiLogoFacebook />
        </Social>
        <Social>
          <BiLogoTwitter />
        </Social>
        <Social>
          <BiLogoInstagram />
        </Social>
        <Social>
          <BiLogoLinkedin />
        </Social>
      </SocialContainer>

      <p>About Sneakers Mafia</p>
      <Links>
        <Link>About Us</Link>
        <Link>Blog</Link>
        <Link>Insights</Link>
        <Link>Jobs</Link>
        <Link>Cooperations</Link>
        <Link>Term of use</Link>
        <Link>Data protection</Link>
        <Link>Imprint</Link>
      </Links>

      <CopyRight>
        Copyright &copy; 2023 Sneaker Mafia. All price include sales taxes.
        <br />
        No rights may be derived from the information contained in the site.
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;

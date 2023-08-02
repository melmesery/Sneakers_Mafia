import React from "react";
import { AiFillCreditCard, AiFillLock, AiFillWechat } from "react-icons/ai";
import { ServicesContainer } from "./Styling.js";

const Services = () => {
  return (
    <ServicesContainer>
      <div>
        <span>
          <AiFillLock />
        </span>
        <h5>Authenticity</h5>
        <p>All products sold are genuine</p>
      </div>

      <div>
        <span>
          <AiFillWechat />
        </span>
        <h5>Chat With Us</h5>
        <p>We offer 24-hour chat support on Whatsapp</p>
      </div>

      <div>
        <span>
          <AiFillCreditCard />
        </span>
        <h5>Buy Now, Pay Later</h5>
        <p>Safe payment</p>
      </div>
    </ServicesContainer>
  );
};

export default Services;

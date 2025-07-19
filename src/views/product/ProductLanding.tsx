import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { PRODUCT_INFO, FEATURES, CONTACT_INFO } from "./constants/constants";

const ProductLanding: React.FC = () => {
  return (
    <>
      <Header name={PRODUCT_INFO.name} tagline={PRODUCT_INFO.tagline} />
      <Hero
        model={PRODUCT_INFO.model}
        price={PRODUCT_INFO.price}
        description={PRODUCT_INFO.description}
      />
      <Features features={FEATURES} />
      <Footer
        company={CONTACT_INFO.company}
        description={CONTACT_INFO.description}
        email={CONTACT_INFO.email}
        phone={CONTACT_INFO.phone}
        address={CONTACT_INFO.address}
        copyright={CONTACT_INFO.copyright}
      />
    </>
  );
};

export default ProductLanding;

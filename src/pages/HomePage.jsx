import React from "react";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import CarouselC from "../components/CarouselC";

const HomePage = () => {
  return (
    <>
      <NavbarC></NavbarC>
      <CarouselC />
      <div>HomePage</div>
      <FooterC></FooterC>
    </>
  );
};

export default HomePage;

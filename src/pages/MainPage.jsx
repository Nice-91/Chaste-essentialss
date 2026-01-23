import React from "react";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import CoreValues from "./Values/Values";
import Contact from "./Contact/Contact";

const MainPage = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="shop">
        <Shop />
      </section>

      <section id="values">
        <CoreValues />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default MainPage;

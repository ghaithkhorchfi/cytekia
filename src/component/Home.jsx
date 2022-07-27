/** @format */

import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Card />
      {/* <Detail /> */}
      <Footer />
    </React.Fragment>
  );
};

export default Home;

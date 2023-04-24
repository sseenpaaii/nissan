import React from "react";
import Header from "../components/Header";
import Comments from "../components/Comments";
import Product from "../components/Product";
import Tabs from "../components/Tabs";
import Servise from "../components2/Servise";

const Home = () => {
  return (
    <>
      <Header />
      <Comments/>
      <Tabs />
      <Servise/>
    </>
  );
};

export default Home;

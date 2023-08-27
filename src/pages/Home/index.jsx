/***************Import React packages**************************/
import React from "react";

/***************Import Components**************************/
import Card from "../card";
import HomeSlider from "../homeSlider";
import Brands from "../brands";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: 170 }}>
        <HomeSlider />
      </div>
      <div style={{ marginTop: 10 }}>
        <Brands />
      </div>
      <div style={{ marginTop: 0 }}>
        <Card />
      </div>
    </div>
  );
};

export default Home;

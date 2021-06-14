import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="Shipping to communities around"
        />
        <div className="homeRow">
          <Product
            id='456890'
            title="Xbox One Controller"
            price={4500.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41VNhSg2pkL.__AC_SY200_.jpg"
          />
          <Product
            id='345256'
            title="All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video | No power and volume buttons  One Controller"
            price={2999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61KjlGbj8WS._SL1000_.jpg"
          />
          <Product
            id='426785'
            title="OnePlus 9R 5G"
            price={39999.00}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/61PDbUd1VaL._AC_UL116_SR116,116_.jpg"
          />
        </div>
        <div className="homeRow">
        <Product
            id='342865'
            title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch (39.62 cms) Display T&L Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Win10/GTX 1650Ti Graphics/Obsidian Black/2.3 Kgs), AN515-55 + Xbox Game Pass for PC"
            price={59999.00}
            rating={4}
            image="	https://images-eu.ssl-images-amazon.com/images/I/81mxlt2J81L._AC_UL116_SR116,116_.jpg"
          />
          <Product
            id='567329'
            title="Apple iPhone 12 (64GB) - Purple"
            price={79999.00}
            rating={4}
            image="	https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
          />
        </div>
        <div className="homeRow">
        <Product
            id='567329'
            title="Apple MacBook Air (13-inch, Apple M1 chip)"
            price={117999.00}
            rating={3}
            image="	https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //console.log("added to basket", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div class="product">
      <div class="productInfo">
        <p>{title}</p>
        <div class="price">
          <sup>₹</sup>
          <strong>{price}</strong>
        </div>
        <div class="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;

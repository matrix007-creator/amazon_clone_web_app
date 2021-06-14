import React from "react";
import "./Checkoutproduct.css";
import { useStateValue } from "./Stateprovider";

function Checkoutproduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} alt="product"></img>
      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkouProductButton">
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default Checkoutproduct;

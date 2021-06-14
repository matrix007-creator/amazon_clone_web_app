import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Stateprovider";
import Checkoutproduct from "./Checkoutproduct";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkOut">
      <div className="checkOutLeft">
        <a href="https://www.amazon.com">
          <img
            className="checkOutBanner"
            src="https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Google-Banner-Ads-Example-2-Audible-1.jpg"
            alt="banner"
            href="https://amazon.com"
          />
        </a>
        <div>
          <h3>Hello, {user.email.split('@')[0]}</h3>
          <h2 className="checkoutTitle">Your Shopping Cart</h2>
          {basket.map((item) => (
            <Checkoutproduct
            id={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            price={item.price}

            />
          ))}
        </div>
      </div>
      <div className="checkOutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

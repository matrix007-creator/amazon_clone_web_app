import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./Stateprovider";
import {getBasketTotal} from "./reducer";

function Subtotal() {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} :Items):<strong>{value}</strong>
            </p>
            <small className="subTotalGift">
              <input type="checkbox" />
              This order cointains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        thousandsSpacing={'2'}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

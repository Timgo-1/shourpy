import React, { useContext } from "react";
import { sendPrice } from "../../Offer";
import { ProductContext } from "../Context/ContextProvider";

export default function SendProducts() {
  const { state } = useContext(ProductContext);

  return (
    <div className="send_products">
      <div className="send_info_price">
        <span>Shipping cost</span>
        <span>
          {state.totalPrice - state.offerPrice <= 1000
            ? `${sendPrice.toLocaleString()} €`
            : "Free"}
        </span>
      </div>
      {state.totalPrice - state.offerPrice > 1000 && (
        <div className="send_free_img">
          <img src="images/free.svg" alt="free" />
        </div>
      )}
    </div>
  );
}

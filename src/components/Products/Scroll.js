import React, { useContext } from "react";
import "./Products.css";
import Marquee from "react-fast-marquee";
import { FilterContext } from "../Context/ContextFilter";
import Card from "./Card/Card";

export default function Products() {
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });
  return (
    <>
      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        speed={60}
      >
      <div className="scroll_container">
        {productsList.length > 0 ? (
          productsList.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="not_products">
           <img
              className="products_empty_img"
              src="images/bare-tree.png"
              alt=""
            />
          </div>
        )}
      </div>
      </Marquee>
    </>
  );
}

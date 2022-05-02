import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const updateCart = inCart ? "in-cart" : null;
  function toggleCart () {
    setCart((inCart) => !inCart)
  }
  return (
    <li className={updateCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{inCart ? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

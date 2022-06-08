import React, { useState } from "react";

function Item({ name, category }) {
  const [ addCart , setAddCart ] = useState(false);
 
  function handleClick() {
    setAddCart((addCart) => !addCart)
  }

  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
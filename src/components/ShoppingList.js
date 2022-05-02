import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [listOfItems, setItems] = useState(items);
  const [selectedCategory, setCategoryBy] = useState("All");
    function setTheCat(e) {
      setCategoryBy(e.target.value)
    }
    const filterFoods = listOfItems.filter(item => {
      if(selectedCategory==="All") {
        return true;
      }
      else {
        return item.category === selectedCategory;
      }
      
    }
      )
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={setTheCat} name="filter" value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterFoods.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

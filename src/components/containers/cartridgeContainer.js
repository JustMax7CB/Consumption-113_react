import { useState } from "react";

import AddButton from "../addButton";
import CartridgeRow from "../rows/cartridgeRow";

const CartridgeContainer = () => {
  const [cartridgeRows, setCartridgeRows] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);

  const addCartridgeRow = () => {
    if (cartridgeRows.length < 2) {
      setCartridgeRows((prevRows) => [...prevRows, { index: nextIndex }]);
      setNextIndex((prevIndex) => prevIndex + 1);
    }
  };

  const removeCartridgeRow = (index) => {
    setCartridgeRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>פגזים</h3>

      {cartridgeRows.map(({ index }, rowIndex) => (
        <CartridgeRow
          index={rowIndex}
          key={index}
          onRemove={removeCartridgeRow}
        />
      ))}
      <AddButton
        id="add_cartridge_btn"
        text="הוסף פגזים"
        onclick={addCartridgeRow}
      />
    </div>
  );
};

export default CartridgeContainer;

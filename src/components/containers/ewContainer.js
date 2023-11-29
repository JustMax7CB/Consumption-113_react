import { useState } from "react";

import AddButton from "../addButton";
import EwRow from "../rows/ewRow";

const EwContainer = () => {
  const [EwRows, setEwRows] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);

  const addEwRow = () => {
    if (EwRows.length < 6) {
      setEwRows((prevRows) => [...prevRows, { index: nextIndex }]);
      setNextIndex((prevIndex) => prevIndex + 1);
    }
  };

  const removeEwRow = (index) => {
    setEwRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>מוץ/נורים</h3>
      {EwRows.map(({ index }, rowIndex) => (
        <EwRow index={rowIndex} key={index} onRemove={removeEwRow} />
      ))}
      <AddButton id="ew_btn" text="הוסף מוץ/נורים" onclick={addEwRow} />
    </div>
  );
};

export default EwContainer;

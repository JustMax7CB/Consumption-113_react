import { useState } from "react";

import AddButton from "../addButton";
import MissileRow from "../rows/missileRow";

const MissileContainer = () => {
  const [missileRows, setMissileRows] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);

  const addMissileRow = () => {
    if (missileRows.length < 8) {
      setMissileRows((prevRows) => [...prevRows, { index: nextIndex }]);
      setNextIndex((prevIndex) => prevIndex + 1);
    }
  };

  const removeMissileRow = (index) => {
    setMissileRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h3>טילים</h3>
      {missileRows.map(({ index }, rowIndex) => (
        <MissileRow index={rowIndex} key={index} onRemove={removeMissileRow} />
      ))}
      <AddButton text="הוסף טיל" onclick={addMissileRow} />
    </div>
  );
};

export default MissileContainer;

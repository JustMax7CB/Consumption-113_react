import { useState } from "react";
import GatrRow from "../rows/gatrRow";

const GatrContainer = () => {
  const [gatrRows, setGatrRows] = useState([]);

  const selectTube = (tube) => {
    if (gatrRows.includes(tube)) {
      setGatrRows((prevRows) => prevRows.filter((row) => row !== tube));
    } else {
      setGatrRows((prevRows) => [...prevRows, tube]);
    }
  };

  return (
    <div className="container">
      <h6>בחירת טילי פיגיון</h6>
      <div className="outer-circle">
        <div className="row-1 row">
          <div
            className={`inner-circle ${
              gatrRows.includes("11") ? "selected" : ""
            }`}
            data-tube="11"
            onClick={() => selectTube("11")}
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("8") ? "selected" : ""
            }`}
            onClick={() => selectTube("8")}
            data-tube="8"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("10") ? "selected" : ""
            }`}
            onClick={() => selectTube("10")}
            data-tube="10"
          ></div>
        </div>
        <div className="row-2 row">
          <div
            className={`inner-circle ${
              gatrRows.includes("13") ? "selected" : ""
            }`}
            onClick={() => selectTube("13")}
            data-tube="13"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("4") ? "selected" : ""
            }`}
            onClick={() => selectTube("4")}
            data-tube="4"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("6") ? "selected" : ""
            }`}
            onClick={() => selectTube("6")}
            data-tube="6"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("12") ? "selected" : ""
            }`}
            onClick={() => selectTube("12")}
            data-tube="12"
          ></div>
        </div>
        <div className="row-3 row">
          <div
            className={`inner-circle ${
              gatrRows.includes("15") ? "selected" : ""
            }`}
            onClick={() => selectTube("15")}
            data-tube="15"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("2") ? "selected" : ""
            }`}
            onClick={() => selectTube("2")}
            data-tube="2"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("1") ? "selected" : ""
            }`}
            onClick={() => selectTube("1")}
            data-tube="1"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("3") ? "selected" : ""
            }`}
            onClick={() => selectTube("3")}
            data-tube="3"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("14") ? "selected" : ""
            }`}
            onClick={() => selectTube("14")}
            data-tube="14"
          ></div>
        </div>
        <div className="row-4 row">
          <div
            className={`inner-circle ${
              gatrRows.includes("17") ? "selected" : ""
            }`}
            onClick={() => selectTube("17")}
            data-tube="17"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("7") ? "selected" : ""
            }`}
            onClick={() => selectTube("7")}
            data-tube="7"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("5") ? "selected" : ""
            }`}
            onClick={() => selectTube("5")}
            data-tube="5"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("16") ? "selected" : ""
            }`}
            onClick={() => selectTube("16")}
            data-tube="16"
          ></div>
        </div>
        <div className="row-5 row">
          <div
            className={`inner-circle ${
              gatrRows.includes("19") ? "selected" : ""
            }`}
            onClick={() => selectTube("19")}
            data-tube="19"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("9") ? "selected" : ""
            }`}
            onClick={() => selectTube("9")}
            data-tube="9"
          ></div>
          <div
            className={`inner-circle ${
              gatrRows.includes("18") ? "selected" : ""
            }`}
            onClick={() => selectTube("18")}
            data-tube="18"
          ></div>
        </div>
      </div>
      <div id="gatr_inputs">
        {gatrRows.map((tube, _) => (
          <GatrRow key={tube} tube={tube} />
        ))}
      </div>
    </div>
  );
};

export default GatrContainer;

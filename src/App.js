import React from "react";

import InputField from "./components/inputField";
import MissleContainer from "./components/containers/missileContainer";
import GatrContainer from "./components/containers/gatrContainer";
import EwContainer from "./components/containers/ewContainer";
import CartridgeContainer from "./components/containers/cartridgeContainer";
import Notes from "./components/textArea";
import ShareButton from "./components/shareButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./styles/App.css";
import "./styles/style.css";
import "./styles/gatr.css";
import fetchData from "./scripts/fetchData";

function App() {
  const reset = () => {
    const heliNumber = document.querySelector(".heli-number");
    heliNumber.value = "";

    const RowsToDelete = document.querySelectorAll(".item-row");
    RowsToDelete.forEach((row) => row.remove());

    const gatrTubes = document.querySelectorAll(".inner-circle.selected");
    gatrTubes.forEach((tube) => tube.classList.remove("selected"));

    const gatrInputs = document.querySelectorAll(".gatr-row");
    gatrInputs.forEach((row) => row.remove());

    const textArea = document.querySelector("textarea");
    textArea.value = "";
  };

  return (
    <div className="App" dir="rtl">
      <h1>🐝 דיווחי הצרעה 🐝</h1>

      <InputField type="number" mode="numeric" placeholder="מספר מסוק" />
      <MissleContainer />
      <GatrContainer />
      <EwContainer />
      <CartridgeContainer />
      <Notes />
      <div className="share-container">
        <ShareButton
          text="שיתוף ל Whatsapp"
          imgPath="./assets/whatsapp-logo.png"
          platform="whatsapp"
          fetchMessage={fetchData}
        />
        <ShareButton
          text="שיתוף ל Telegram"
          imgPath="./assets/telegram-logo.png"
          platform="telegram"
          fetchMessage={fetchData}
        />
      </div>

      <button
        id="clear_btn"
        type="button"
        className="btn btn-secondary"
        onClick={reset}
      >
        איפוס נתונים
      </button>
    </div>
  );
}

export default App;

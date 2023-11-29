import CartridgeRow from "../components/rows/cartridgeRow";

const fetchData = () => {
  let fullMessage = ``;
  const heliMessage = `🐝 מסוק ${fetchHeliNumber()} 🐝\n`;
  const missileMessage = `${fetchMissiles()}\n`;
  const gatrMessage = `${fetchGatr()}\n`;
  const ewMessage = `${fetchEw()}\n`;
  const cartridgeMessage = `${fetchCartridge()}\n`;
  const noteMessage = `${fetchNotes()}\n`;

  if (!heliMessage.includes(null)) fullMessage += heliMessage;
  if (!missileMessage.includes(null)) fullMessage += missileMessage;
  if (!gatrMessage.includes(null)) fullMessage += gatrMessage;
  if (!ewMessage.includes(null)) fullMessage += ewMessage;
  if (!cartridgeMessage.includes(null)) fullMessage += cartridgeMessage;
  if (!noteMessage.includes(null)) fullMessage += noteMessage;

  console.log(fullMessage);
  return fullMessage;
};

const fetchHeliNumber = () => {
  const heliNumber = document.querySelector(".heli-number").value;
  if (heliNumber.includes(null) || heliNumber.length === 0) return null;
  return heliNumber;
};

const fetchMissiles = () => {
  const missileRows = document.querySelectorAll(".missile-row");
  if (missileRows.length === 0) return null;
  else {
    let missileMessage = "";
    missileRows.forEach((row) => {
      const type = row.querySelector(".missile-select").value;
      const serial = row.querySelector(".missile-number").value;
      const result = row.querySelector(".missile-result").value;
      missileMessage += `${type} מסד ${serial} - ${result}\n`;
    });
    return missileMessage;
  }
};

const fetchGatr = () => {
  const gatrRows = document.querySelectorAll(".gatr-row");
  if (gatrRows.length === 0) return null;
  else {
    let gatrMessage = "";
    gatrRows.forEach((row) => {
      const tube = row.getAttribute("tube");
      const serial = row.querySelector(".gatr-input").value;
      const result = row.querySelector(".gatr-select").value;
      gatrMessage += `טיל פיגיון מסד ${serial} - צינור #${tube} - ${result}\n`;
    });
    return gatrMessage;
  }
};

const fetchEw = () => {
  const EwRows = document.querySelectorAll(".ew-row");
  if (EwRows.length === 0) return null;
  else {
    let ewMessage = "";
    EwRows.forEach((row) => {
      const type = row.querySelector(".ew-type-select").value;
      const point = row.querySelector(".ew-point-select").value;
      const count = row.querySelector(".ew-number").value;
      ewMessage += `${type} ${point} - ${count}\n`;
    });
    return ewMessage;
  }
};

const fetchCartridge = () => {
  const cartridgeRows = document.querySelectorAll(".cartridge-row");
  if (CartridgeRow.length === 0) return null;
  else {
    let cartridgeMessage = "";
    cartridgeRows.forEach((row) => {
      const type = row.querySelector(".cartridge-type-select").value;
      const count = row.querySelector(".cartridge-input").value;
      cartridgeMessage += `פגזים ${type} - ${count}\n`;
    });
    return cartridgeMessage;
  }
};

const fetchNotes = () => {
  const note = document.querySelector("textarea").value;
  if (note === "" || note === null || note.length === 0) return null;
  else return note;
};

export default fetchData;

const CartridgeRow = ({ index, onRemove }) => {
  return (
    <div className="cartridge-row item-row" index={index}>
      <select
        className="cartridge-type-select form-select"
        id={`cartridge_type_select_${index}`}
      >
        {["מבצעי", "אימונים"].map((type, _) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="number"
        inputMode="numeric"
        placeholder="כמות פגזים"
        id={`cartridge_input_${index}`}
        className="cartridge-input form-control data-number"
      />
      <button
        type="button"
        className="btn btn-danger remove-btn"
        onClick={() => onRemove(index)}
      >
        מחק
      </button>
    </div>
  );
};

export default CartridgeRow;

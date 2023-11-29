import { missileTypes, resultOptions } from "../../constants";

const MissileRow = ({ index, onRemove }) => {
  return (
    <div className="missile-row item-row" index={index}>
      <select
        className="missile-select form-select"
        id={`missile_select_${index}`}
      >
        {missileTypes.map((type, _) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="number"
        inputMode="numeric"
        placeholder="מסד טיל"
        className="missile-number data-number form-control"
        id={`missile_number_${index}`}
      />
      <select
        className="missile-result form-select"
        id={`missile_result_${index}`}
      >
        {resultOptions.map((value, _) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
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
export default MissileRow;

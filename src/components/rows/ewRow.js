import { ewTypes, ewPoints } from "../../constants";

const EwRow = ({ index, onRemove }) => {
  return (
    <div className="ew-row item-row" index={index}>
      <select
        className="ew-type-select form-select"
        id={`ew_type_select_${index}`}
      >
        {ewTypes.map((type, _) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        className="ew-point-select form-select"
        id={`ew_point_select_${index}`}
      >
        {ewPoints.map((type, _) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="number"
        inputMode="numeric"
        placeholder="כמות"
        className="ew-number data-number form-control"
        id={`ew_number_${index}`}
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
export default EwRow;

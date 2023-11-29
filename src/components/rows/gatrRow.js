import { resultOptions } from "../../constants";

const GatrRow = ({ tube }) => {
  return (
    <div className="gatr-row" tube={tube}>
      <input
        className="form-control gatr-input"
        type="number"
        inputMode="numeric"
        placeholder={`מסד פיגיון - צינור #${tube}`}
      />
      <select className="form-select gatr-select">
        {resultOptions.map((value, _) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GatrRow;

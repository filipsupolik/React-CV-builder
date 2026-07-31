import "../styles/FormField.css";

function FormField({ label, type = "text", value }) {
  return (
    <div className="form-field">
      <label name={label} htmlFor={label}>
        {label}
      </label>
      <input type={type} value={value} id={label} />
    </div>
  );
}

export default FormField;

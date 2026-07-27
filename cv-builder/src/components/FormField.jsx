import "../styles/FormField.css";

function FormField({ label, type = "text", value }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input type={type} value={value} />
    </div>
  );
}

export default FormField;

function FormField({ label, type = "text", value }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} />
    </>
  );
}

export default FormField;

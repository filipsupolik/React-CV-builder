import FormField from "./FormField";
function Section({ title, fields }) {
  return (
    <div>
      <h2>{title}</h2>
      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          type={field.type}
          value={field.value}
        />
      ))}
    </div>
  );
}

export default Section;

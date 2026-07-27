import "../styles/Section.css";

import FormField from "./FormField";
import { AddButton, DeleteButton } from "./Buttons";
function Section({ title, fields }) {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="input-fields">
        {fields.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            type={field.type}
            value={field.value}
          />
        ))}
      </div>
      <div className="buttons">
        <AddButton label={title} />
        <DeleteButton />
      </div>
    </div>
  );
}

export default Section;

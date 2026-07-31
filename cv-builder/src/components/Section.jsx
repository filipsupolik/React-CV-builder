import "../styles/Section.css";

import FormField from "./FormField";
import { AddButton, DeleteButton } from "./Buttons";

function Section({ title, fields }) {
  return (
    <section className="section">
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
    </section>
  );
}

export function PreviewSection() {
  return <section></section>;
}

export function PreviewHeader({ info }) {
  return (
    <div className="preview-header" id={info.name}>
      <h1>{info.name || "Jon Doe"}</h1>
      <p>
        {info.email && <span>📧 {info.email}</span>}
        {info.phone && <span>📞{info.phone}</span>}
      </p>
    </div>
  );
}

export default Section;

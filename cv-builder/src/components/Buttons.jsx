import "../styles/Buttons.css";

function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

export function AddButton({ label }) {
  return <Button className="add-btn">+ Add {label}</Button>;
}

export function DeleteButton() {
  return <Button className="remove-btn">Remove</Button>;
}

export function ExportPrintButton() {
  return <Button className="export-btn">Export / Print to PDF</Button>;
}

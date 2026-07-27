import "../styles/Buttons.css";

export function AddButton({ label }) {
  return (
    <>
      <button className="add-btn">+ Add {label}</button>
    </>
  );
}

export function DeleteButton() {
  return (
    <>
      <button className="remove-btn">Remove</button>
    </>
  );
}

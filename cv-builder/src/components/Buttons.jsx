import { Trash2 } from "lucide-react";

export function MainButtons() {
  return (
    <div className="main-btns">
      <button className="del-btn">
        <Trash2 size={12} /> Clear Resume
      </button>
    </div>
  );
}

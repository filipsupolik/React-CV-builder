import "../../styles/Sidebar/Sidebar.css";

import { FillBtn, ModeBtn, PreviewBtn } from "../Buttons";
import LayoutControl from "./LayoutControl";

function Sidebar() {
  return (
    <div className="sidebar">
      <LayoutControl />
      <ModeBtn />
      <PreviewBtn />
      <FillBtn />
    </div>
  );
}

export default Sidebar;

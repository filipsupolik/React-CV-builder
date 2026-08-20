import "../../styles/MainPage/MainPage.css";

import Sidebar from "../Sidebar/SideBar";
import Editor from "../Editor/Editor";
import { useState } from "react";
import SectionSelect from "../Sections/SelectSkillSection";
function MainPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="main-container">
      <Sidebar />
      <Editor handleNext={setShowOverlay} />
      {showOverlay && <SectionSelect handleClose={setShowOverlay} />}
    </div>
  );
}

export default MainPage;

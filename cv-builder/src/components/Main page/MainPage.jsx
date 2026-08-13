import "../../styles/MainPage/MainPage.css";

import Sidebar from "../Sidebar/SideBar";
import Editor from "../Editor/Editor";
function MainPage() {
  return (
    <div className="main-container">
      <Sidebar />
      <Editor />
    </div>
  );
}

export default MainPage;

import "./styles/App.css";
import Resume from "./Resume";
import SideBar from "./Sidebar";

function App() {
  return (
    <div className="main">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="resume">
        <Resume />
      </div>
    </div>
  );
}

export default App;

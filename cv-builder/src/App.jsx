import "./styles/App.css";
import SideBar from "./Sidebar";
import Preview from "./Preview";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Jon Doe",
    email: "jondoe@gmail.com",
    phone: "0948858826",
  });
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="main">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="resume">
          <Preview personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
}

export default App;

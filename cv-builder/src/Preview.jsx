import "./styles/Preview.css";

import { PreviewHeader, PreviewSection } from "./components/Section";

function Preview({ personalInfo }) {
  return (
    <div className="preview">
      <PreviewHeader info={personalInfo} />
      <PreviewSection />
    </div>
  );
}

export default Preview;

import PersonalInfoEdit from "./PersonalInfo";

export default function Editor() {
  return (
    <div className="editor">
      <h2 className="page-name">Resume Builder</h2>
      <p className="tagline">Your custom profesional resume builder</p>

      <PersonalInfoEdit />
    </div>
  );
}

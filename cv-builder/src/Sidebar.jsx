import "./styles/Sidebar.css";

import Section from "./components/Section";
function SideBar() {
  const generalInfoFields = [
    { name: "name", label: "name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phoneNumber", label: "Phone Number", type: "tel" },
  ];

  const educationFields = [
    { name: "school", label: "School", type: "text" },
    { name: "field", label: "Field of study", type: "text" },
    { name: "yearStart", label: "Beginning year of study", type: "number" },
    { name: "yearEnd", label: "End year of study", type: "number" },
  ];

  const experienceFields = [
    { name: "companyName", label: "Company name", type: "text" },
    { name: "position", label: "Position title", type: "text" },
    {
      name: "responsibilities",
      label: "Main responsibilities",
      type: "text",
    },
    {
      name: "from",
      label: "From Date",
      type: "Date",
    },
    {
      name: "until",
      label: "Until Date",
      type: "Date",
    },
  ];
  return (
    <>
      <h2>Edit CV</h2>
      <Section title={"General Information"} fields={generalInfoFields} />
      <Section title={"Education"} fields={educationFields} />
      <Section title={"Work Experience"} fields={experienceFields} />
    </>
  );
}

export default SideBar;

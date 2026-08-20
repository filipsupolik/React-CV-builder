import "../../../styles/Editor/Form/FormTitle.css";

import { NextBtn } from "../../Buttons";

function FormTitle({ handleNext }) {
  return (
    <div className="form-title-div">
      <h3>Personal Details</h3>
      <NextBtn handleNext={handleNext} />
    </div>
  );
}

export default FormTitle;

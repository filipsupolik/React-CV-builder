import "../../../styles/Editor/Form/Form.css";

import Personal from "./FormSections/PersonalInfo";
import FormTitle from "./FormTitle";

function Form({ handleNext }) {
  return (
    <div className="form-container">
      <FormTitle handleNext={handleNext} />
      <form className="form">
        <Personal />
      </form>
    </div>
  );
}

export default Form;

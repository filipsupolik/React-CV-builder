import Personal from "./FormSections/PersonalInfo";
import FormTitle from "./FormTitle";

function Form() {
  return (
    <div className="form-container">
      <FormTitle />
      <form className="form">
        <Personal />
      </form>
    </div>
  );
}

export default Form;

import { FaLink } from "react-icons/fa6";
import { CloseBtn } from "../Buttons";
function Card() {
  return (
    <>
      <button type="button" className="select-card">
        <div className="select-card-top">
          <FaLink />
          <h5>Links</h5>
        </div>
      </button>
    </>
  );
}

function SectionSelect({ handleClose }) {
  return (
    <div className="select-overlay">
      <div className="select-container">
        <div className="select-title">
          <h3>Add Selection</h3>
          <CloseBtn handleClose={handleClose} />
        </div>
        <div className="select-list">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default SectionSelect;

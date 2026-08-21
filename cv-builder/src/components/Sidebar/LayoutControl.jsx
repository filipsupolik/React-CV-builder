import { FaEllipsis, FaUser } from "react-icons/fa6";

function LayoutControl() {
  return (
    <div className="layout-div">
      <div className="layout-btn-div">
        <div className="layout-current-indicator"></div>
        <button type="button" className="layout-btn">
          <FaUser />
        </button>
      </div>
      <button type="button" className="layout-opt-btn">
        <FaEllipsis />
      </button>
    </div>
  );
}

export default LayoutControl;

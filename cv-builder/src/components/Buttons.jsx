import { FaGrip, FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function LayoutSortableBtn() {
  return (
    <div className="layout-btn-div">
      <div className="layout-current-indicator"></div>
      <button type="button" className="sidebar-grab">
        <FaGrip />
      </button>
      <button type="button" className="layout-btn"></button>
      <button type="button" className="layout-del-btn">
        <FaTrash />
      </button>
    </div>
  );
}

function NextBtn() {
  return (
    <div className="next-btn-div">
      <button type="button" className="next-btn">
        Next
        <FaAngleRight />
      </button>
    </div>
  );
}

export { LayoutSortableBtn, NextBtn };

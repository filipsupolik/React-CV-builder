import "../styles/Buttons.css";

import {
  FaGrip,
  FaAngleRight,
  FaAngleLeft,
  FaCircle,
  FaEye,
  FaFillDrip,
} from "react-icons/fa6";

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

function NextBtn({ handleNext }) {
  const toggleNext = () => {
    handleNext(true);
  };

  return (
    <div className="next-btn-div">
      <button type="button" className="next-btn" onClick={toggleNext}>
        Next
        <FaAngleRight />
      </button>
    </div>
  );
}

function ModeBtn() {
  return (
    <div className="mode-btn-div">
      <button type="button" className="mode-btn">
        <>
          <FaCircle className="dual-icon-1" />
          <FaCircle className="dual-icon-2" />
        </>
      </button>
    </div>
  );
}

function PreviewBtn() {
  return (
    <div className="prev-btn-div">
      <button type="button" className="preview-btn">
        <FaEye />
      </button>
    </div>
  );
}

function FillBtn() {
  return (
    <div className="fill-btn-div">
      <button type="button" className="fill-btn">
        <FaFillDrip />
      </button>
    </div>
  );
}

function CloseBtn({ handleClose }) {
  const toggleClose = () => {
    handleClose(false);
  };

  return (
    <>
      <button type="button" className="select-close-btn" onClick={toggleClose}>
        X
      </button>
    </>
  );
}
export { LayoutSortableBtn, NextBtn, ModeBtn, PreviewBtn, FillBtn, CloseBtn };

import "../styles/Header.css";

import { ExportPrintButton } from "./Buttons";

function Header() {
  return (
    <header className="header">
      <h2>CV builder</h2>
      <ExportPrintButton />
    </header>
  );
}

export default Header;

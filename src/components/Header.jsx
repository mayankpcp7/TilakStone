import React from "react";
import NavBar from "./NavBar";
import HelpingDevotees from "./HelpingDevotees";

const Header = () => {
  return (
    <header className="z-[21]">
      <NavBar />
      <HelpingDevotees />
    </header>
  );
};

export default Header;

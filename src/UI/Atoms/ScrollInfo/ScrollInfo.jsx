import React from "react";
import { ScrollInfoBox } from "./styled.ScrollInfo";

function ScrollInfo({ text = "Roles of the MM members" }) {
  return (
    <ScrollInfoBox>
      <button type="button">{text}</button>
    </ScrollInfoBox>
  );
}

export default ScrollInfo;

import React from "react";
import { HeaderWrapper } from "./styled.Header";
import Content from "../Content/Content";

function Header({ onClick }) {
  return (
    <HeaderWrapper>
      <Content>
        <button type="button" className="menuBar" onClick={onClick}></button>
        <h1 className="logo">M_M</h1>
      </Content>
    </HeaderWrapper>
  );
}

export default Header;

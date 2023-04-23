import React from "react";
import { ContentWrapper } from "./styled.content";

function Content({ children }) {
  return <ContentWrapper className="content">{children}</ContentWrapper>;
}

export default Content;

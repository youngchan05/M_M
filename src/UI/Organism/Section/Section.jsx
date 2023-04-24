import React from "react";
import Content from "../Content/Content";
import { SectionBox } from "./styled.Section";

function Section({ children }) {
    return (
        <SectionBox className="section">
            <Content>{children}</Content>;
        </SectionBox>
    );
}

export default Section;

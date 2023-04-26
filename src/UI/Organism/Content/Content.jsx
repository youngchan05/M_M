import React from "react";
import { ContentWrapper } from "./styled.content";

function Content({ children, fill }) {
    return (
        <ContentWrapper fill={fill} className="content">
            {children}
        </ContentWrapper>
    );
}

export default Content;

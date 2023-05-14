import React from "react";
import { Wrapper } from "./styled.Text";

const index = ({ size = 16, ...props }) => {
    return <Wrapper fS={size} {...props} />;
};

export default index;

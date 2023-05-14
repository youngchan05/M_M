import React from "react";
import styled from "styled-components";

const TextTypes = ({ fS, children, ...props }) => {
    const sizeSetting = (() => {
        if (fS < 18) return <P {...props}>{children}</P>;
        else if (fS < 22) return <H5 {...props}>{children}</H5>;
        else if (fS < 26) return <H4 {...props}>{children}</H4>;
        else if (fS < 30) return <H3 {...props}>{children}</H3>;
        else if (fS < 34) return <H2 {...props}>{children}</H2>;
        else return <H1 {...props}>{children}</H1>;
    })();

    return sizeSetting;
};

const P = styled.p``;
const H5 = styled.h5``;
const H4 = styled.h4``;
const H3 = styled.h3``;
const H2 = styled.h2``;
const H1 = styled.h1``;

export default TextTypes;

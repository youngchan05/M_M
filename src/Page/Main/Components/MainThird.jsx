import React from "react";
import styled from "styled-components";
import { Flex } from "../../../UI/Atoms";

const MainThird = () => {
    return (
        <Wrapper id={"dataaa"}>
            <Flex column valign={"side"}>
                dddd
                <p>ssss</p>
                <p>8888</p>
            </Flex>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    > div {
        background: linear-gradient(
            180deg,
            rgba(148, 206, 226, 0.3) 0%,
            rgba(167, 4, 4, 0.3) 100%
        );
        height: 300vh;
    }
`;

export default MainThird;

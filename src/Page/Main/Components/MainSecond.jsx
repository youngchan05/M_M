import React from "react";
import { MainSecondWrapper } from "../styled.Main";
import styled from "styled-components";
import { Flex, Text } from "../../../UI/Atoms";

const MainSecond = () => {
    return (
        <MainSecondWrapper
            column={[
                1,
                "382rem",
                "24rem",
                "382rem",
                "24rem",
                "382rem",
                "24rem",
                "382rem",
                1,
            ]}
            row={[2, "693rem", 1]}
            gap={0}
        >
            <BlurBox isPull>
                <Text weight={700} size={40}>
                    일을 해내는 우리의 여러가지 방법
                </Text>
            </BlurBox>
            <BlurBox />
            <Flex valign={"bottom"}>
                <Text size={32}>UX UI</Text>
            </Flex>
            <BlurBox />
            <Flex valign={"bottom"}>
                <Text size={32}>Design</Text>
            </Flex>
            <BlurBox />
            <Flex valign={"bottom"}>
                <Text size={32}>Development</Text>
            </Flex>
            <BlurBox />
            <Flex valign={"bottom"}>
                <Text size={32}>Motion</Text>
            </Flex>
            <BlurBox />
            <BlurBox isPull />
        </MainSecondWrapper>
    );
};

const BlurBox = styled.aside`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: rgba(254, 254, 254, 0.9);
    ${({ isPull }) => (isPull ? `grid-column:1/10;` : "")}
    >* {
        color: #323232;
        margin-bottom: 40rem;
    }
`;

export default MainSecond;

import styled, { css } from "styled-components";

const baseUnit = "rem";

const arrayStyleSet = (target) => {
    const isArray = Array.isArray(target);
    let style = "";
    isArray
        ? target.map((i) => {
            return (style +=
                typeof i === "number"
                    ? i + `${baseUnit} `
                    : i
                        ? i + " "
                        : "0 ");
        })
        : (style += "");

    return style;
};

const alignSet = (target) => {
    switch (target) {
        case "left":
        case "top":
            return "flex-start";
        case "center":
        case "middle":
            return "center";
        case "right":
        case "bottom":
            return "flex-end";
        case "side":
            return "space-between";
        default:
            return "";
    }
};

export const Wrapper = styled.div`${({ gap, column, align, valign, wrap }) =>
    css`
        display:flex;
        flex-wrap:${wrap ? "wrap" : "nowrap"};
        gap: ${arrayStyleSet(gap)};
        flex-direction: ${column ? "column" : "row"};
        justify-content: ${alignSet(column ? valign : align)};
        align-items: ${alignSet(column ? align : valign)};
    `}
`;

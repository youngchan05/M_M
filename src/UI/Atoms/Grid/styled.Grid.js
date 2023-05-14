import styled from "styled-components";

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

const gridSet = (target) => {
    const type = typeof target;
    const isArray = Array.isArray(target);
    let style = "";
    isArray
        ? target.map((i) => {
            return (style += typeof i === "number" ? i + "fr " : i + " ");
        })
        : (style += type === "number" ? `repeat(${target},1fr)` : target);
    return style;
};

export const Wrapper = styled.div`
    ${({ theme: { unit } }) => unit}
    ${({ gap, column, row, align, valign }) => `
        display: grid;
        grid-template-rows: ${gridSet(row)};
        grid-template-columns: ${gridSet(column)};
        gap: ${arrayStyleSet(gap)};
        justify-content: ${alignSet(align)};
        align-items: ${alignSet(valign)};
    `}
`;

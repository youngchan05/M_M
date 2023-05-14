import styled, { css } from "styled-components";
import TextTypes from "./type.Text";


const baseUnit = "rem";

const valueSet = (target) => {
    const type = typeof target;
    const array = Array.isArray(target);
    let style = "";
    console.log(target)
    array
        ? target.map((i) => {
            return (style +=
                typeof i === "number" ? i + `${baseUnit} ` : i + " ");
        })
        : (style += type === "number" ? `${target}${baseUnit}` : target);
    return target === undefined ? target : style;
};

export const Wrapper = styled(TextTypes)`${({ weight = 500, fS }) => css`
font-size:${valueSet(fS)};
font-weight:${weight};

`}  
`
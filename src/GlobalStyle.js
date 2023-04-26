import { createGlobalStyle } from "styled-components";

const sizes = [1920, 1440, 1024, 768, 360];

const setSize = () => {
    let screen = "";
    for (let i = 0; i < sizes.length; i++) {
        const current = sizes[i];
        screen += `@media (max-width: ${current}px) {
            html {
                font-size:${100 / current}vw
            }
        }`;
    }
    return screen;
};

const GlobalStyle = createGlobalStyle`
    ${setSize()}
`;

export default GlobalStyle;

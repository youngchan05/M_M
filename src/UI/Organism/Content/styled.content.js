import styled, { css } from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1600rem;
    margin: 0 auto;
    ${({ fill, theme: { media } }) => {
        if (fill) return;
        return css`
            ${media(
                "l",
                `
            padding:0 120rem;
        `
            )}
            ${media(
                "m",
                `
          padding:0 80rem;
      `
            )}
            ${media(
                "s",
                `
        padding:0 60rem;
    `
            )}
          ${media(
                "xs",
                `
      padding:0 24rem;
  `
            )}
        `;
    }}
`;

import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    .logo {
        img {
            height: 40rem;
        }
    }
    .menuBar {
        width: 24rem;
        height: 16rem;
        background: url(./asset/img_menu.png) no-repeat center;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 96rem;
    }

    ${({ theme: { media } }) => {
        return css`
            ${media(
                "xs",
                `
                top:24rem;
                .content {
                    height: 52rem;
                }
                `
            )}
        `;
    }}
`;

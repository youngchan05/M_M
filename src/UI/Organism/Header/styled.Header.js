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
    padding: 12px 8px;
    background: url(./asset/img_menu.png) no-repeat center;
    background-size: 24rem auto;
    box-sizing: content-box;
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
        "s",
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

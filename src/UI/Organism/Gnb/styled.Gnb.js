import styled, { css } from "styled-components";

export const GnbWrapper = styled.div`
  position: fixed;
  left: ${({ isActive }) => (isActive ? 0 : -100)}%;
  top: 0;
  height: 100%;
  width: 800rem;
  background: rgba(50, 50, 50, 0.98);
  z-index: 100;
  transition: all 1s;
  .closeBtn {
    position: absolute;
    right: 80rem;
    top: 36rem;
    width: 21rem;
    height: 21rem;
    background: url(./asset/arrow_back.png) no-repeat center;
  }
  ul {
    padding: 192rem 0 0 80rem;
  }
`;

export const GnbItem = styled.li`
  ${({ icon }) => {
    return css`
      font-weight: 700;
      font-size: 60rem;
      line-height: 172%;
      letter-spacing: -0.03em;
      color: #666666;
      button {
        transition: all 0.4s;
        background-position: left center;
        font-size: inherit;
        font-weight: inherit;
        &:hover {
          background: url(./asset/${icon}) no-repeat left center;
          padding-left: 68rem;
          color: #fff;
        }
      }
      + li {
        margin-top: 40rem;
      }
    `;
  }}
`;

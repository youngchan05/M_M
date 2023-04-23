import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  .menuBar {
    width: 24px;
    height: 16px;
    background: url(./asset/img_menu.png) no-repeat center;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 96px;
  }
`;

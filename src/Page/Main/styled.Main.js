import styled from "styled-components";

export const MainBox = styled.div`
  .section {
    background: #eee;
  }
  .content {
    position: relative;
    padding-top: 136px;
    .rightText {
      margin-bottom: 42px;
      text-align: right;
      font-weight: 400;
      font-size: 16px;
      line-height: 172%;
      letter-spacing: -0.03em;
      color: #323232;
    }
    .textBox {
      .test1 {
        position: relative;
        display: flex;
      }
      p {
        display: flex;
        font-weight: 700;
        font-size: 120px;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: #1e1e1e;
        strong {
          display: inline-block;
          position: relative;
          transition: 0.8s;
          padding-left: 4px;
          position: realtive;
          span {
            position: absolute;
            left: 0;
            word-break: keep-all;
            opacity: 0;
            font-weight: 700;
            font-size: 120px;
            line-height: 172%;
            &.active {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

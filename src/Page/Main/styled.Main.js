import styled from "styled-components";

export const MainBox = styled.div`
  .section {
    background: #eee;
  }
  .content {
    position: relative;
    padding-top: 136rem;
    .rightText {
      margin-bottom: 42rem;
      text-align: right;
      font-weight: 400;
      font-size: 16rem;
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
        align-items:center;
        font-weight: 700;
        font-size: 120rem;
        line-height: 172%;
        letter-spacing: -0.03em;
        color: #1e1e1e;
        strong {
          display:flex ;
          align-items:center;
          position: relative;
          transition: 0.8s;
          padding-left: 4rem;
          span {
            position: absolute;
            left: 0;
            word-break: keep-all;
            opacity: 0;
            font-weight: 700;
            font-size: 120rem;
            line-height: 172%;
            transition: 0.5s ;
            &.active {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

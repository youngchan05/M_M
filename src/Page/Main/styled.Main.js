import styled, { css } from "styled-components";

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
  }
  .textBox {
    p {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 120rem;
      line-height: 130rem;
      letter-spacing: -0.03em;
      color: #1e1e1e;
      strong {
        display: flex;
        align-items: center;
        position: relative;
        transition: 0.8s;
        font-weight: inherit;
        font-size: inherit;
        line-height: inherit;
        span {
          position: absolute;
          left: 0;
          word-break: keep-all;
          font-weight: inherit;
          font-size: inherit;
          line-height: inherit;
          opacity: 0;
          &.active {
            transition: 1.6s;
            opacity: 1;
          }
        }
      }
      + p {
        margin-top: 40rem;
      }
    }
  }
  ${({ theme: { media } }) => {
    return css`
      ${media(
        "l",
        `
                .content {
                    padding-top: 136rem;
                    .rightText {
                        margin-bottom: 60rem;
                        font-size: 14rem;
                      } 
                }
                .textBox {
                    p { 
                        font-size: 88rem;
                        line-height: 100rem;
                        img {
                            height:88rem;
                        }
                    }
                }
            `
      )}
      ${media(
        "m",
        `
                .content {
                    padding-top: 244rem;
                    .rightText {
                        margin-bottom: 50rem;
                        font-size: 14rem;
                      } 
                }
                .textBox {
                    p {
                        font-size: 62rem;
                        line-height: 70rem;
                    }
                }
            `
      )}
      ${media(
        "s",
        `
                .content {
                    padding-top: 174rem;
                    .rightText {
                        margin-bottom: 80rem;
                        font-size: 14rem;
                      }
                }
                .textBox {
                    p {
                        font-size: 64rem;
                        line-height: 70rem;
                        img {
                            height:64rem;
                        }
                        + p {
                            margin-top:20rem;
                        }
                    }
                    .last {
                        display:block;
                    }
                    .inner {
                        display:flex;
                        margin-top:20rem;
                        .logo {
                            height:50rem;
                            margin-right:4rem;
                        }
                        .earthquake {
                            height:64rem;
                        }
                    }
                }
            `
      )}
      ${media(
        "xs",
        `
                .content {
                    padding-top: 116rem;
                    .rightText {
                        margin-bottom: 60rem;
                        font-size: 12rem;
                      }
                }
                .textBox {
                    p {
                        font-size: 30rem;
                        line-height: 40rem;
                        img {
                            height:30rem;
                        }
                        + p {
                            margin-top:10rem;
                        }
                    }
                    .last {
                        display:block;
                    }
                    .inner {
                        display:flex;
                        .logo {
                            height:20rem;
                            margin-right:4rem;
                        }
                        .earthquake {
                            height:30rem;
                        }
                    }
                }
            `
      )}
    `;
  }}
`;

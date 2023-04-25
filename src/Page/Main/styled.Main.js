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
    }
`;

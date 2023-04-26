import React, { useEffect, useRef, useState } from "react";
import { Section } from "../../UI/Organism";
import { MainBox } from "./styled.Main";
function Main() {
    const [count, setCount] = useState(0);
    const ref = useRef([]);
    const ref2 = useRef([]);
    const imgRef = useRef();
    const imgRef3 = useRef();
    const imgRef2 = useRef();

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((count) => (count === 4 ? 0 : (count += 1)));
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <MainBox>
            <Section>
                <div className="rightText">
                    어떻게 하면 우리의 일이 이 세상에서
                    <br />
                    즐거움과 편리함을 선사할 수 있을지를 계속 자문합니다
                </div>
                <div className="textBox">
                    <p>
                        우
                        <strong
                            style={{
                                width:
                                    count === 2
                                        ? `${imgRef?.current?.offsetWidth}px`
                                        : 0,
                            }}
                        >
                            <span className={count === 2 ? "active" : ""}>
                                <img
                                    style={{ width: "104rem" }}
                                    ref={imgRef}
                                    src="./asset/cheer.png"
                                />
                            </span>
                        </strong>
                        리의
                    </p>
                    <p>
                        해석을 상
                        <strong
                            style={{
                                width: `${imgRef3?.current?.offsetWidth}px`,
                            }}
                        >
                            <span className={count === 1 ? "active" : ""}>
                                <img
                                    style={{ width: "104rem" }}
                                    ref={imgRef3}
                                    src="./asset/partly_cloudy_night (2).png"
                                />
                            </span>
                            <span className={count !== 1 ? "active" : ""}>
                                상
                            </span>
                        </strong>
                        하고
                    </p>
                    <p>
                        새로운&nbsp;
                        <strong
                            style={{
                                width: `${ref?.current[count]?.offsetWidth}px`,
                            }}
                        >
                            <span
                                className={
                                    [0, 1].includes(count) ? "active" : ""
                                }
                                ref={(el) => {
                                    ref.current[0] = el;
                                    ref.current[1] = el;
                                }}
                            >
                                문화
                            </span>
                            <span
                                className={
                                    [2, 3].includes(count) ? "active" : ""
                                }
                                ref={(el) => {
                                    ref.current[2] = el;
                                    ref.current[3] = el;
                                }}
                            >
                                가치
                            </span>
                            <span
                                className={count === 4 ? "active" : ""}
                                ref={(el) => (ref.current[4] = el)}
                            >
                                브랜드
                            </span>
                        </strong>
                        를 만드는 것
                    </p>
                    <p className="last">
                        이것이 바로&nbsp;
                        <br className="is_pc" />
                        <p className="inner">
                            <strong
                                style={{
                                    width: `${ref2?.current[count]?.offsetWidth}px`,
                                }}
                            >
                                <span
                                    className={count === 0 ? "active" : ""}
                                    ref={(el) => (ref2.current[0] = el)}
                                >
                                    <img
                                        className="logo"
                                        src="./asset/img_logo.png"
                                    />
                                </span>
                                <span
                                    className={
                                        [1, 2].includes(count) ? "active" : ""
                                    }
                                    ref={(el) => {
                                        ref2.current[1] = el;
                                        ref2.current[2] = el;
                                    }}
                                >
                                    MM
                                </span>
                                <span
                                    className={count === 3 ? "active" : ""}
                                    ref={(el) => (ref2.current[3] = el)}
                                >
                                    M
                                </span>
                                <span
                                    className={count === 4 ? "active" : ""}
                                    ref={(el) => (ref2.current[4] = el)}
                                >
                                    MM_
                                </span>
                            </strong>
                            이 믿는 혁
                            <strong
                                style={{
                                    width:
                                        count === 3
                                            ? `${imgRef2?.current?.offsetWidth}px`
                                            : 0,
                                }}
                            >
                                <span className={count === 3 ? "active" : ""}>
                                    <img
                                        ref={imgRef2}
                                        className="earthquake"
                                        src="./asset/earthquake.png"
                                    />
                                </span>
                            </strong>
                            신이죠
                        </p>
                    </p>
                </div>
            </Section>
        </MainBox>
    );
}

export default Main;

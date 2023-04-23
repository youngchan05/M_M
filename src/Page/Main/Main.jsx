import React from "react";
import { Section } from "../../UI/Organism";
import { MainBox } from "./styled.Main";
function Main() {
  return (
    <MainBox>
      <Section>
        <div className="rightText">
          어떻게 하면 우리의 일이 이 세상에서
          <br />
          즐거움과 편리함을 선사할 수 있을지를 계속 자문합니다
        </div>
        <div className="textBox">
          우리의
          <br />
          해석을 상상하고
          <br />
          새로운 문화를 만드는 것<br />
          이것이 바로 이 믿는 혁신이죠
        </div>
      </Section>
    </MainBox>
  );
}

export default Main;

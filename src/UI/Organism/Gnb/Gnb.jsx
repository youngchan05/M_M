import React from "react";
import { GnbItem, GnbWrapper } from "./styled.Gnb";

function Gnb({ onClick, isActive }) {
  const gnbList = [
    {
      title: "Main",
      icon: "Group.png",
    },
    {
      title: "Possibility",
      icon: "expand_content.png",
    },
  ];
  return (
    <GnbWrapper isActive={isActive}>
      <button type="button" onClick={onClick} className="closeBtn"></button>
      <ul>
        {gnbList.map((i, idx) => (
          <GnbItem key={idx} icon={i.icon}>
            <button type="button">{i.title}</button>
          </GnbItem>
        ))}
      </ul>
    </GnbWrapper>
  );
}

export default Gnb;

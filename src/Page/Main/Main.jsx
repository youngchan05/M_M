import React, { useEffect, useRef, useState } from "react";
import { MainBox } from "./styled.Main";
import usePageScroll from "../../UI/Hooks/usePageScroll";
import MainFirst from "./Components/MainFirst";
import MainSecond from "./Components/MainSecond";
import MainThird from "./Components/MainThird";
function Main() {
    const { ref } = usePageScroll();
    const [isLoading, setIsLoading] = useState(true);
    return (
        <MainBox ref={ref} isLoding={isLoading}>
            <MainFirst setIsLoading={setIsLoading} />
            <MainSecond />
            <MainThird />
        </MainBox>
    );
}

export default Main;

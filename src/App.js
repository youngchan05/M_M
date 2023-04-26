import { useState } from "react";
import { Main } from "./Page";
import { ScrollInfo } from "./UI/Atoms";
import { Gnb, Header } from "./UI/Organism";

function App() {
    const [isGnb, setIsGnb] = useState(false);
    const onToggleGnb = () => setIsGnb(!isGnb);
    return (
        <>
            <Header onClick={onToggleGnb} />
            <Gnb isActive={isGnb} onClick={onToggleGnb} />
            <Main />
            <ScrollInfo />
        </>
    );
}

export default App;

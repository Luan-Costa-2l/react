import { ReactNode, useContext } from "react";
import { LevelContext } from "./LevelContext";

type Props = {
    children: ReactNode;
}

const Section = ({ children }: Props) => {
    const level = useContext(LevelContext);
    
    return (
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
    );
}

export default Section;
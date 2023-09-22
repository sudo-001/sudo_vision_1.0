
import React, { ReactNode, createContext, useState } from "react";

export const HoverContext = createContext();

export const HoverContextProvider = ({children}:any) => {
    const [isLinkHover, setIsLinkHover] = useState(false);

    return <HoverContext.Provider value={{isLinkHover, setIsLinkHover}}>
        {children}
    </HoverContext.Provider>
}
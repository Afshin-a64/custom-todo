import { createContext } from "react";


export const formContext = createContext(
    {
        cardItem: [],
        setCardItem: ()=>{},
    }
)
export const refContext = createContext(
    {
        inputRef: [],
        setInputRef: ()=>{},
    }
)
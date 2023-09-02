import { ReactNode, createContext, useState } from "react";

export const SearchInputContext = createContext<any>(null)

export const SearchProvider = ({children} : {children: ReactNode}) => {
    const [ searchInput , setSearchInput ] = useState<string | null>(null)

    return (
    <SearchInputContext.Provider value={{ searchInput , setSearchInput}}>
        {children} 
    </SearchInputContext.Provider>
    )
}
import { useContext, createContext, useState, useEffect } from "react";
 export const SearchContext = createContext();

export const SearchProvider =({children}) => {

    const [searchValue, setSearchValue] = useState()

    const [encodedSearch, setEncodedSearch] = useState()

    useEffect(()=> {
        console.log(searchValue);
    }, [searchValue])

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue, encodedSearch, setEncodedSearch}}>
            {children}
        </SearchContext.Provider>)

}

// export const useSearch = () => {
//     return useContext(SearchContext)
// }
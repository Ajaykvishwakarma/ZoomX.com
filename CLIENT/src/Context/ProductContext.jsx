import { createContext, useState } from 'react';

export const ProductContext = createContext()

export const ProductContextProvider = ({children }) => {

    const [ contextUrl , setContextUrl ] = useState('')
    // console.log(productUrl)
    const handleChange1 = (value) => {
        setContextUrl(value)
    }

    return (
        <ProductContext.Provider value={{contextUrl, handleChange1 }}>
            {children}
        </ProductContext.Provider>
    )

}
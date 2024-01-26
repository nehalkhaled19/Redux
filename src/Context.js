import { createContext, useState } from "react"
import React from 'react'

export const ProductsContext = createContext()

export default function Context(props) {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ])
    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    )
}


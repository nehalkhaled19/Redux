import React, { useContext } from 'react'
import { ProductsContext } from './Context';
export default function Nav() {
    const value = useContext(ProductsContext)
    console.log(value);
    return (
       <h1 >Products Num : {value.length}</h1>
    )
}

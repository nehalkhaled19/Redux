import React, { useContext } from 'react'
import { ProductsContext } from './Context';
import { ProductState } from './Recoil';
import { useRecoilState } from 'recoil';
export default function Products() {
    // const value = useContext(ProductsContext)
    const [product, setProduct] = useRecoilState(ProductState);
    return <>
        {product.map((e) => <div>
            <h3>{e.name}</h3>
        </div> )}
    </>


}

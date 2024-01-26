import { atom } from "recoil";


export const ProductState = atom({
    key: 'ProductState', // unique ID (with respect to other atoms/selectors)
    default: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ], // default value (aka initial value)
  });
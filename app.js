console.log(Redux);
// console.log(ReduxThunk);

// action
const TakeMoney = ($) => {
    let action = {
        type: `Take`,
        amount: $
    }
    return action
}
const AddMoney = ($) => {
    let action = {
        type: `Add`,
        amount: $
    }
    return action
}
const Products = (pro) => {
    return {
        type: 'add Products',
        amount: pro
    }
}

const getProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(Products(data));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

// console.log(AddMoney().type);

const reducer = (state = [], act) => {

    switch (act?.type) {
        case 'Take':
            return state - act?.amount
        case 'Add':
            return state + act?.amount
        case 'add Products':
            console.log(act.amount);
            return [...act?.amount]
        default:
            return state
    }
}
// (ReduxThunk.default
const store = Redux.createStore(reducer,Redux.applyMiddleware(ReduxThunk.default))

store.dispatch(getProducts());
// console.log(store.getState()); // Log the updated state
// console.log(Redux);
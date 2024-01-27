

const TakeMoney = ($) => {
   let action ={
    type: `Take`,
    amount: $
}
return action
}
const AddMoney= ($) => {
 let action ={
    type: `Add`,
    amount: $
}
return action
}

// console.log(AddMoney().type);

const reducer = ( state = 1000,act) => {
   
    switch (act?.type) {
        case 'Take':
            return state - act?.amount
        case 'Add':
            return state + act?.amount
        default:
            return state
    }
}
const store = Redux.createStore(reducer);

store.dispatch(AddMoney(300));
console.log(store.getState()); // Log the updated state

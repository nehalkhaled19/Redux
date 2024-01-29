
const AddMoney = ($) => {
    let action = {
        type: `Add`,
        amount: $
    }
    return action
}


const reducer = (state = 1000, act) => {

    switch (act?.type) {
        case 'Take':
            return state - act?.amount
        case 'Add':
            return state + act?.amount
        default:
            return state
    }
}
let store = $redux.createStore(reducer)
// console.log(d);
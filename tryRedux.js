(function () {
    const customRedux = (function () {

        const createStore = (reducer) => {
          
            let state;
            const getState = () => state
            const dispatch = (action) => {
                console.log(AddMoney);
                state = reducer(state,action)
            }
            const subscribe = () => { }

            dispatch(AddMoney(300))

            return {
                dispatch, getState, subscribe
            }
        }
        return {
            createStore
        }

    })()







    if (!window.customRedux) {
        window.$redux = customRedux
    }


})()
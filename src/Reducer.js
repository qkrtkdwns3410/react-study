export const initialState = {
    basket: [],
    
};
export const getBasketTotal = (basket) =>
        /*amount : 초깃값 ;; item : 더해줄 배열값들.*/
        basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                
            };
        
        default:
            return state;
    }
    
};
export default reducer;

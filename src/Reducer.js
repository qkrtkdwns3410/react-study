export const initialState = {
    basket: [],
    user: null
    
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
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
            );
            
            let newBasket = [...state.basket];
            if (index >= 0) {
                /*splice */
                newBasket.splice(index, 1);
            } else {
                console.warn('(id : ' + action.id + ")번이 존재하지 않습니다");
            }
            return {
                ...state,
                basket: newBasket
                
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        default:
            return state;
    }
    
};
export default reducer;

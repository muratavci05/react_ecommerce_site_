import { act } from "react-dom/test-utils"

const initialState = localStorage.getItem("cart")
?JSON.parse(localStorage.getItem("cart"))
: null

export const SET_CART = "set_cart"
export const REMOVE_CART = "remove_cart"

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CART:
            const stateData = {
                ...action.payload,
                items: action.payload.items,
                itemsCount: action.payload.items.length,
            }   
            localStorage.setItem("cart", JSON.stringify(stateData));
            return stateData

        case REMOVE_CART:
            localStorage.removeItem("cart");
            
            return null;

                //createCart ve additem içinde ki veri aynı olduğu için aynı dispatc işlemi yapıldı
                // bu nedenle reducer içinde ki case devre dışı bırakıldı...set_cart aynı işlevi görüyor
        /* case "SET_CART_ITEMS":
                return{
                    ...state,
                    items: action.payload.items,
                    itemsCount: action.payload.items.length,
                }
                        */
        default: 
            return state

    }

}
export default cartReducer;
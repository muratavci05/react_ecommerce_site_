const initialState = null

export const SET_CART = 'set_cart'
export const REMOVE_CART = 'remove_cart'
// set_cart ile set_cart_item verileri aynı olduğu için set cart items'i kaldırıyorum
//export const SET_CART_ITEMS = 'set_cart_items' 

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const stateData={
            ...action.payload,
            items: action.payload.items,
            itemsCount: action.payload.items.length,
      }
      localStorage.setItem("cart",jSON.stringify(stateData));
        
      return stateData
      

    case REMOVE_CART:
        localStorage.removeItem("cart");
      return null

    /* case SET_CART_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        itemsTotal: action.payload.items.length,
      } */

    default:
      return state
  }
}
export default cartReducer
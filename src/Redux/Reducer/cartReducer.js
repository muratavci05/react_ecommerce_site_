const initialState = null

export const SET_CART = 'set_cart'
export const REMOVE_CART = 'remove_cart'
export const SET_CART_ITEMS = 'set_cart_items'

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.payload

    case REMOVE_CART:
      return null

    case SET_CART_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        itemsTotal: action.payload.items.length,
      }

    default:
      return state
  }
}
export default cartReducer
import { combineReducers, createStore } from 'redux'
import cartReducer from './reducers/cartReducer'
import tokenReducer from './reducers/tokenReducer'

const rootReducer = combineReducers({
  tokenState: tokenReducer,
  cartState: cartReducer,
})

const store = createStore(rootReducer)

export default store

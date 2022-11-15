import { combineReducers, createStore } from "redux";
import cartReducer from "./Reducer/cartReducer";
import tokenReducer from "./Reducer/tokenReducer";
//combine edilenler import edilecek

const rootReducer = combineReducers({
    tokenState: tokenReducer,
    cartState: cartReducer,

    //buraya combime edilecek olanlar yazılacak
});

const store = createStore(rootReducer);

export default store;
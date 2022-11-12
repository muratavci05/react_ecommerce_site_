import { combineReducers, createStore } from "redux";
//combine edilenler import edilecek

const rootReducer = combineReducers({
    //buraya combime edilecek olanlar yazılacak
});

const store = createStore(rootReducer);

export default store;
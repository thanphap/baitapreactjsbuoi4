import {combineReducers, createStore} from "redux" 
import { danhSachReducer } from "./reduce/danhSachReducer"

const rootReducer = combineReducers({
    danhSachReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
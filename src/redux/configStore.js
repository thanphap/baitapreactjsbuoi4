import {combineReducers, createStore} from "redux" 
import { danhSachReducer } from "./reduce/danhSachReducer"
import { datVeReducer } from "./reduce/datVeReducer"

const rootReducer = combineReducers({
    datVeReducer,
    danhSachReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
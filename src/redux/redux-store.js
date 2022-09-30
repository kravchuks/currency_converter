import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer";

let reducers = combineReducers({
    reducer: reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
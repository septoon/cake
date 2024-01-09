import { combineReducers, createStore } from 'redux'
import catalogReducer from './catalog-reducer'



const reducers = combineReducers({
    catalogPage: catalogReducer,
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // applyMiddleware for thunk

window.store = store
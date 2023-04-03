import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from './reducers/auth.reducer';
import categoriesReducer from './reducers/categories.reducer';
import slidersReducer from './reducers/sliders.reducer';
import usersReducer from './reducers/users.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authReducer,
    categoriesReducer,
    slidersReducer,
    usersReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
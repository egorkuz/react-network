import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import newsReducer from './news-reducer'
import authenticationReducer from './authentication-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer,
    authentication: authenticationReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store
export default store;

import { combineReducers, createStore } from 'redux';
import tickets from './tickets/reducer';

const rootReducer = combineReducers({
    tickets
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
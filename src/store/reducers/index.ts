import {combineReducers} from 'redux';
import {IAppState} from './appState.d';
import shopReducer from './shop';

export const rootReducer = combineReducers<IAppState>({
  shopState: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

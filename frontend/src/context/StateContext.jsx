'use client';

import { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './StateReducers';

export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => {
	//const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateProvider = () => useContext(StateContext);

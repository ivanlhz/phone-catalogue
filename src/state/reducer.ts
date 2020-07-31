import {FETCH_PHONES_ERROR, FETCH_PHONES_PENDING, FETCH_PHONES_SUCCESS} from './actions';
import { appState, getPhoneAction } from '../types';

export const initialState: appState = {
    pending: false,
    phones: [],
    error: undefined
}

export function mainReducer(state = initialState, action: getPhoneAction): appState {
    switch(action.type) {
        case FETCH_PHONES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PHONES_SUCCESS:
            return {
                ...state,
                pending: false,
                phones: action.payload
            }
        case FETCH_PHONES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getPhones = (state:appState) => state.phones;
export const getPhonesPending = (state:appState) => state.pending;
export const getPhonesError = (state:appState) => state.error;
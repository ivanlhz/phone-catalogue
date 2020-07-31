import { phoneProps } from "../types";
export const FETCH_PHONES_PENDING = 'FETCH_PHONES_PENDING';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_ERROR = 'FETCH_PHONES_ERROR';

export function fetchPhonesPending() {
    return {
        type: FETCH_PHONES_PENDING
    }
}

export function fetchPhonesSuccess(phones: phoneProps) {
    return {
        type: FETCH_PHONES_SUCCESS,
        products: phones
    }
}

export function fetchPhonesError(error: string) {
    return {
        type: FETCH_PHONES_ERROR,
        error: error
    }
}
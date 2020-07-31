import {fetchPhonesError, fetchPhonesPending, fetchPhonesSuccess} from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

function fetchPhones() {
    return (dispatch: ThunkDispatch<{},{},AnyAction>)=> {
        dispatch(fetchPhonesPending());
        fetch('http://localhost:5000/phones',{mode: 'no-cors'})
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPhonesSuccess(res.phones));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchPhonesError(error));
        })
    }
}

export default fetchPhones;
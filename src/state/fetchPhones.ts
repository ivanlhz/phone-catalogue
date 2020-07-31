import {fetchPhonesError, fetchPhonesPending, fetchPhonesSuccess} from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

function fetchPhones() {
    return async (dispatch: ThunkDispatch<{},{},AnyAction>) => {
        dispatch(fetchPhonesPending());
        try {         
          const res = await axios.get('http://localhost:5000/phones')
          dispatch(fetchPhonesSuccess(res.data.phones))
        } catch (error) {
          dispatch(fetchPhonesError(error))
        }
    }
}

export default fetchPhones;
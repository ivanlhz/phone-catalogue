import React, { FC, useEffect } from 'react';
import './App.css';
import fetchPhones from '../state/fetchPhones'
import { getPhonesError, getPhones, getPhonesPending } from '../state/reducer';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction } from 'redux';
import {appState, phoneProps} from '../types'
import { ThunkDispatch } from 'redux-thunk';

type  appProps = {
  pending: boolean,
  phones: phoneProps[],
  error: string | undefined,
  fetchPhones: typeof fetchPhones,
};

const App: FC<appProps> = (props) => {
  useEffect(() => {
    props.fetchPhones();
  }, [props])

  return (
    <div className="App">
      <header className="App-header">
        {
          props.phones && props.phones.map( p => <h2 key={p.id}>{p.name}</h2>)
        }
      </header>
    </div>
  );
}

const mapStateToProps = (state: appState) => ({
  error: getPhonesError(state),
  phones: getPhones(state),
  pending: getPhonesPending(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{},{}, AnyAction>) => bindActionCreators({
  fetchPhones: fetchPhones
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

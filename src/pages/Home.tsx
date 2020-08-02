import React, { FC, useEffect } from 'react';
import fetchPhones from '../state/fetchPhones';
import { getPhonesError, getPhones, getPhonesPending } from '../state/reducer';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction } from 'redux';
import { appState, phoneProps } from '../types';
import { ThunkDispatch } from 'redux-thunk';
import { PhoneList, Spinner } from '../components';
import { RouteComponentProps } from '@reach/router';

type homeProps = RouteComponentProps & {
  pending: boolean;
  phones: phoneProps[];
  error: string | undefined;
  fetchPhones: typeof fetchPhones;
};

const Home: FC<homeProps> = (props) => {
  useEffect(() => {
    props.fetchPhones();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <section>{props.pending ? <Spinner /> : <PhoneList data={props.phones} />}</section>;
};

const mapStateToProps = (state: appState) => ({
  error: getPhonesError(state),
  phones: getPhones(state),
  pending: getPhonesPending(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) =>
  bindActionCreators(
    {
      fetchPhones: fetchPhones,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

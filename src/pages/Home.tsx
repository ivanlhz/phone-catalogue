import React, { FC, useEffect } from 'react';
import fetchPhones from '../state/fetchPhones';
import { getPhonesError, getPhones, getPhonesPending } from '../state/reducer';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction } from 'redux';
import { appState, phoneProps } from '../types';
import { ThunkDispatch } from 'redux-thunk';
import { PhoneList, Spinner } from '../components';
import { RouteComponentProps } from '@reach/router';
import styled from '@emotion/styled';

type homeProps = RouteComponentProps & {
  pending: boolean;
  phones: phoneProps[];
  error: string | undefined;
  fetchPhones: typeof fetchPhones;
};

const HomeStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const Home: FC<homeProps> = (props) => {
  useEffect(() => {
    props.fetchPhones();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <HomeStyled>{props.pending ? <Spinner /> : <PhoneList data={props.phones} />}</HomeStyled>;
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

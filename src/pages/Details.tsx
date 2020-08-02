import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { appState, phoneProps } from '../types';
import { getPhones, getPhonesError, getPhonesPending } from '../state/reducer';
import { connect } from 'react-redux';
import { PhoneDetails, Spinner } from '../components';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, bindActionCreators } from 'redux';
import fetchPhones, { fetchPhonesDef } from '../state/fetchPhones';
import { useGetPhone } from '../customHooks/useGetPhone';
import styled from '@emotion/styled';

interface DetailsProps extends RouteComponentProps {
  phoneid?: string;
  phones?: phoneProps[];
  error?: string;
  pending?: boolean;
  fetchPhones: fetchPhonesDef;
}

const DetailStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
`;
const Header = styled.div`
  background-color: #318fb5;
  padding: .75rem;
  text-align: right;
  width: 100%;
  margin-bottom: 2rem;
  a, a:hover, a:visited, a:link, a:active {
    color: white;
  }
`
const Details: FC<DetailsProps> = ({ phoneid = '', phones, pending = false, fetchPhones, error }) => {
  const { phone } = useGetPhone(phoneid, pending, fetchPhones, phones);

  return (
    <DetailStyled>
      {pending && <Spinner />}
      {phone && !pending && !error && (
        <Content>
          <Header><Link to="/" className="goBack"> Go Back to the phone list</Link></Header>
          <PhoneDetails {...phone} />
        </Content>
      )}
    </DetailStyled>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);

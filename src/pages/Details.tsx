import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { appState, phoneProps } from '../types';
import { getPhones, getPhonesError, getPhonesPending } from '../state/reducer';
import { connect } from 'react-redux';
import { PhoneDetails } from '../components';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, bindActionCreators } from 'redux';
import fetchPhones, { fetchPhonesDef } from '../state/fetchPhones';
import { useGetPhone } from '../customHooks/useGetPhone';

interface DetailsProps extends RouteComponentProps {
  phoneid?: string;
  phones?: phoneProps[];
  error?: string;
  pending?: boolean;
  fetchPhones: fetchPhonesDef;
}

const Details: FC<DetailsProps> = ({ phoneid = '', phones, pending = false, fetchPhones }) => {
  const { phone } = useGetPhone(phoneid, pending, fetchPhones, phones);

  // TODO ADD spinner
  return (
    <section>
      {phone && <PhoneDetails {...phone} />}
    </section>
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

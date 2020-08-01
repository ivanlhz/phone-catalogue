import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { appState, phoneProps } from '../types';
import { getPhones, getPhonesError, getPhonesPending } from '../state/reducer';
import { connect } from 'react-redux';
import { PhoneDetails } from '../components/PhoneDetails';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, bindActionCreators } from 'redux';
import fetchPhones, { fetchPhonesDef } from '../state/fetchPhones';

interface DetailsProps extends RouteComponentProps {
  phoneid?: string;
  phones?: phoneProps[];
  error?: string;
  pending?: boolean;
  fetchPhones: fetchPhonesDef;
}

const Details: FC<DetailsProps> = ({ phoneid, phones, pending, fetchPhones }) => {
  const [phone, setPhone] = useState<phoneProps>();
  useEffect(() => {
    if ((!phones || phones.length === 0) && !pending) {
      fetchPhones();
    } else {
      setPhone(phones?.find((p) => (String(p.id) === phoneid)));
    }
  }, [phones, phoneid, pending]);

  // TODO ADD spinner
  return (
    <section>
      <h2>PHONE ID - {phoneid} </h2>
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

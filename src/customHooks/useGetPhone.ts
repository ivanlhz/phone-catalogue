import { useState, useEffect } from 'react'
import { phoneProps } from '../types';
import { fetchPhonesDef } from '../state/fetchPhones';

export const useGetPhone = (
  phoneid: string,
  pending: boolean,
  fetchPhones: fetchPhonesDef,
  phones?: phoneProps[]) => {
  const [phone, setPhone] = useState<phoneProps>();

  useEffect(() => {
    if ((!phones || phones.length === 0) && !pending) {
      fetchPhones();
    } else {
      setPhone(phones?.find((p) => (String(p.id) === phoneid)));
    }
  }, [phones, phoneid, pending]);// eslint-disable-line react-hooks/exhaustive-deps

  return { phone }
}
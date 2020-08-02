import React from 'react';
import {render} from '@testing-library/react';
import {Spinner} from '../components';

test('SHould be rendered', () => {
  const {getByRole} = render(<Spinner />)
  expect(getByRole('spinbutton')).toBeInTheDocument();
})
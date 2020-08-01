import React from 'react'
import {render} from '@testing-library/react'
import {NotFound} from '../pages'

test('Not found should render',() => {
  const {getByText} = render(<NotFound />)
  expect(getByText('404 NOT FOUND')).toBeInTheDocument();
})
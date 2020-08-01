import React from 'react';
import { phoneProps } from '../types';
import {render} from '@testing-library/react';
import {PhoneDetails} from '../components/PhoneDetails'

const phone: phoneProps =  {
  "id": 0,
  "name": "iPhone 7",
  "manufacturer": "Apple",
  "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
  "color": "black",
  "price": 769,
  "imageFileName": "IPhone_7.png",
  "screen": "4,7 inch IPS",
  "processor": "A10 Fusion",
  "ram": 2
};

test('Phone details renders and shows info', () => {
  const {getByText} = render(<PhoneDetails {...phone} />)
  expect(getByText(phone.name)).toBeInTheDocument();
  expect(getByText(phone.manufacturer)).toBeInTheDocument();
  expect(getByText(phone.description)).toBeInTheDocument();
  expect(getByText(`Processor: ${phone.processor}`)).toBeInTheDocument();
})
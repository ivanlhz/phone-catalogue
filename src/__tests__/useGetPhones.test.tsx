import {renderHook} from '@testing-library/react-hooks'
import {useGetPhone} from '../customHooks/useGetPhone'
import { phoneProps } from '../types';

const list: phoneProps[] = [
  {
    id: 0,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description:
      'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 1,
    name: 'Galaxy S7',
    manufacturer: 'Samsung',
    description:
      'Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.',
    color: 'grey',
    price: 209,
    imageFileName: 'Galaxy_S7.png',
    screen: '5,1 inch Quad-HD',
    processor: 'Snapdragon 820',
    ram: 4,
  },
];

test('useGetPhone - Should call fetch function', () => {
  const fetchMock = jest.fn();
  const { result } = renderHook(() => useGetPhone('1', false, fetchMock, []));
  expect(fetchMock).toBeCalled();
  expect(result.current.phone).toBeUndefined();
})

test('useGetPhone - Shouldn\'t call fetch function if is pending', () => {
  const fetchMock = jest.fn();
  const { result } = renderHook(() => useGetPhone('1', true, fetchMock, []));
  expect(fetchMock).not.toBeCalled();
  expect(result.current.phone).toBeUndefined();
})

test('useGetPhone - Should return a phone and no call fetch', () => {
  const fetchMock = jest.fn();
  const { result } = renderHook(() => useGetPhone('1', false, fetchMock, list));
  expect(fetchMock).not.toBeCalled();
  expect(result.current.phone).not.toBeUndefined();
})


import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';
import { Provider } from 'react-redux';
import { initialState as reducerInitialState, mainReducer } from '../state/reducer';
import { middlewares } from '../state/store';
import { createStore, applyMiddleware } from 'redux';

const list = [
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
]

function renderWithRouter(
  ui: JSX.Element,
  {
    route = '/',
    history = createHistory(createMemorySource(route)),
    store = createStore(mainReducer, reducerInitialState, applyMiddleware(...middlewares)),
  }
) {
  return {
    ...render(
      <Provider store={store}>
        <LocationProvider history={history}>{ui}</LocationProvider>
      </Provider>
    ),
    history,
  };
}

test('Render home page', () => {
  const { container } = renderWithRouter(<App />, {});
  expect(container.innerHTML).toMatch('Phone Catalogue');
});

test('Render Details page with content', () => {
  const newState = {
    pending: false,
    phones: list,
    error: undefined
}
  const store = createStore(mainReducer, newState, applyMiddleware(...middlewares))
  const { container } = renderWithRouter(<App />, { route: '/phones/0', store});
  expect(container.innerHTML).toMatch('iPhone 7');
});

test('Render Details page no content because pending', () => {
  const newState = {
    pending: true,
    phones: list,
    error: undefined
}
  const store = createStore(mainReducer, newState, applyMiddleware(...middlewares))
  const { container } = renderWithRouter(<App />, { route: '/phones/0', store});
  expect(container.innerHTML).not.toMatch('iPhone 7');
});

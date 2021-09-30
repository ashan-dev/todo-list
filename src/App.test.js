import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({
  userState: {
    isLoginSuccess: false,
  },
});

test('App renders correctly', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

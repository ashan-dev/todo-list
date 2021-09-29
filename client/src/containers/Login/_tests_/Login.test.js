import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Login from '../Login.jsx';

const mockStore = configureMockStore();
const store = mockStore({
  userState: {
    userData: null,
  },
});

test('Login renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../Home.jsx';

const mockStore = configureMockStore();
const store = mockStore({
  todoList: [],
});

test('Home renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Profile from "../Profile.jsx";

const mockStore = configureMockStore();
const store = mockStore({
  userState: {
    loggedInUserData: null,
  },
});

test("Profile renders correctly", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Profile />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

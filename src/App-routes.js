import React from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/Home/Home.jsx'));
const Profile = React.lazy(() => import('./containers/Profile/Profile.jsx'));

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
    </React.Fragment>
  );
};

export default AppRoutes;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as Routes from './routes';
import Header from '../components/Header/Header';
import { getCurrentUser } from '../store/actions/auth';

const App = ({ getCurrentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Routes.HomeScreen} />
          <Route path='/cart' component={Routes.CartScreen} />
          <Route path='/signin' component={Routes.AuthScreen} />
          <Route path='/checkout' component={Routes.CheckoutScreen} />
          <Route path='/shop/:category' component={Routes.CollectionScreen} />
          <Route path='/products/:id' component={Routes.ProductDetailScreen} />
        </Switch>
      </div>
    </>
  );
};

export default connect(null, { getCurrentUser })(App);

import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import BuyerDashboard from './dashboard/BuyerDashboard';
import FarmerDashboard from './dashboard/FarmerDashboard';
import AdminFarms from './pages/admin/AdminFarms';
import AdminUsers from './pages/admin/AdminUsers';
import BuyerOrders from './pages/buyer/BuyerOrders';
import Checkout from './pages/buyer/Checkout';
import FarmerOrders from './pages/farmer/FarmerOrders';
import FarmerProducts from './pages/farmer/FarmerProducts';
import LandingPage from './shared/LandingPage';
import ProductListing from './shared/ProductsList';
import { BuyerRegistration } from './user-pages/BuyerRegistration';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/admin/users" component={AdminUsers} />
          <Route exact path="/dashboard/admin/farms" component={AdminFarms} />
          <Route exact path="/dashboard/farmer" component={FarmerDashboard} />
          <Route exact path="/dashboard/buyer" component={BuyerDashboard} />
          <Route exact path="/buyer/orders" component={BuyerOrders} />
          <Route exact path="/checkout" component={Checkout} />

          <Route exact path="/basic-ui/buttons" component={Buttons} />
          <Route exact path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route exact path="/basic-ui/typography" component={Typography} />

          <Route exact path="/form-Elements/basic-elements" component={BasicElements} />

          <Route exact path="/tables/basic-table" component={BasicTable} />

          <Route exact path="/icons/mdi" component={Mdi} />

          <Route exact path="/charts/chart-js" component={ChartJs} />


          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register1} />
          <Route exact path="/buyer/register" component={BuyerRegistration} />

          <Route exact path="/error-pages/error-404" component={Error404} />
          <Route exact path="/error-pages/error-500" component={Error500} />
          <Route exact path="/product-listing" component={ProductListing} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/farmer/products" component={FarmerProducts} />
          <Route exact path="/farmer/orders" component={FarmerOrders} />
          <Redirect to="/error-pages/error-404" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
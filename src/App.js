import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import axios from './helpers/axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from './actions/initialData.action';
import Home from './containers/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { ProductListPage } from './containers/ProductListPage/index';
import { isUserLoggedIn } from './actions/auth.action';
import {ProductDetailsPage} from './containers/ProductDetailsPage';
import CartPage from './containers/CartPage';
import { updateCart } from './actions/cart.action';
import { Checkout } from './containers/Checkout';
import Orders from './containers/Orders';


function App() {

  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth)

  useEffect(()=>{
    dispatch(getInitialData());
  },[])

  
  useEffect(() => {
  
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())      
    }
  }, [auth.authenticate])

  useEffect(()=>{
    dispatch(updateCart());
  },[auth.authenticate])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/orders" component={Orders} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/:product/:productId/p" component={ProductDetailsPage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

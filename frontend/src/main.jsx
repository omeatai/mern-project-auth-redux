import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}
  from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomeScreen from "./components/HomeScreen.jsx";
import LoginScreen from './components/LoginScreen.jsx';
import RegisterScreen from './components/RegisterScreen.jsx';
import ProfileScreen from './components/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={ true } path='/' element={ <HomeScreen /> } />
      <Route path='/login' element={ <LoginScreen /> } />
      <Route path='/register' element={ <RegisterScreen /> } />
      {/* Private Route */ }
      <Route path='' element={ <PrivateRoute /> }>
        <Route path='/profile' element={ <ProfileScreen /> } />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={ store }>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </Provider>
);

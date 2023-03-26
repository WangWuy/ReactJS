import logo from './logo.svg';
import './App.css';
import { ROUTERS } from './router';
import { Route } from 'react-router-dom';
import AuthRouter from './components/AuthRouter/AuthRouter';
import { useReducer } from 'react';
import { AuthContext, AuthDispatchContext, OAuth2Context } from './contexts/auth.context';
import { authReducer, initialAuth } from './store/reducers/auth.reducer';
import { useAuth0 } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {


  return (
    <Provider store={store}>
      <AuthRouter router={ROUTERS}>
        {(routes = []) => routes.map((item, key) => <Route key={key} path={item.path} element={item.element} />)}
      </AuthRouter>
    </Provider>
  );
}

export default App;

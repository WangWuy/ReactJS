import logo from './logo.svg';
import './App.css';
import { ROUTERS } from './router';
import { Route } from 'react-router-dom';
import AuthRouter from './components/AuthRouter/AuthRouter';
import { createContext, useReducer } from 'react';
import { AuthContext, AuthDispatchContext } from './store/contexts/auth.context';
import { authReducer, initialAuth } from './store/reducers/auth.reducer';


function App() {
  const [auth, dispatch] = useReducer(authReducer,initialAuth);
  console.log(auth);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
    <AuthContext.Provider value={auth}>
    <AuthRouter router={ROUTERS}>
      {(routes = []) => routes.map((item,key) => <Route key={key} path={item.path} element={item.element}/>)}
    </AuthRouter>
    </AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
}

export default App;

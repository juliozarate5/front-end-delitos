import React, { useEffect, useReducer, useState } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './routers/AppRouter';
import { InfoUsers } from './utils/InfoUsers';


const init = () => {
  return JSON.parse(sessionStorage.getItem('user')) || {logged: false};
}
function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
    if(user.user)
      sessionStorage.setItem('token', JSON.stringify(user.user.access_token));
    const existe = InfoUsers.roleExiste('ROLE_ADMIN');
    setIsAdmin(existe);
  }, [user])

  return (
        <AuthContext.Provider value={{ user, dispatch, isAdmin }}>
          <AppRouter/>
        </AuthContext.Provider>
  );
}

export default App;

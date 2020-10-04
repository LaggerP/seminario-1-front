import React from 'react';
import { useHistory } from 'react-router-dom';
import fakeAuth from '../../Api/Auth/fakeAuth'

const Login = () => {
   let history = useHistory();

   const fakeLogin = () => {
      fakeAuth.authenticate(history.push("/"))
      window.location.reload(false);
   }
   return (
      <div>
         <button type="button" onClick={fakeLogin}>Go dashboard</button>
         <h1>hola</h1>
      </div>
   );
};

export default Login;
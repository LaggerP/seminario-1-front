import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getRol, isConnected } from '../Api/services/authService'

export const ProtectedRoute = ({ component: Component, ...rest }) => {

   return (

      <Route
         {...rest}
         render={props => {
            console.log(props)
            if (isConnected()) {
               if (props.location.pathname === '/administrar' && getRol() == 2) {
                  return <Component {...props} />
               } else if (props.location.pathname === '/administrar' && getRol() == 3) {
                  return (
                     <Redirect
                        to={{
                           pathname: '/',
                           state: {
                              from: props.location,
                           },
                        }}
                     />
                  );

               } else return <Component {...props} />
            } else {
               return (
                  <Redirect
                     to={{
                        pathname: '/login',
                        state: {
                           from: props.location,
                        },
                     }}
                  />
               );
            }
         }
         }
      />
   )
};

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../Api/Auth/fakeAuth'

export const ProtectedRoute = ({ component: Component, ...rest }) => {

   return (

      <Route
         {...rest}
         render={props => {
            if (fakeAuth.isConnected()) {
               return <Component {...props} />
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

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../Api/Auth/fakeAuth'
import {isConnected} from '../Api/services/authService'

export const ProtectedRoute = ({ component: Component, ...rest }) => {

   return (

      <Route
         {...rest}
         render={props => {
            if (isConnected()) {
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

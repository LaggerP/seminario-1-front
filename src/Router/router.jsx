// src/router/index.js
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

// navigation guard / middleware
import { ProtectedRoute } from "./ProtectedRoute"

// Preloading component
import Loading from "../Components/Loading/Loading";

// Import helper func
const views = (path) => {
  return lazy(() => import(`../Components/${path}/${path}`));
};

// route list
const routes = [
  {
    path: "/",
    component:"Dashboard",
  },
  {
    path: "/login",
    component:"Login",
  },
  {
    path: "/consejos",
    component:"Consejos",
  },
  {
    path: "/Ejercicios",
    component:"Ejercicios",
  },
  {
    path: "/seguimiento",
    component:"Seguimiento",
  },
  {
    path: "/calendario",
    component:"Calendario",
  },
  {
    path: "404", // 404 fallback
    noExact: true, // all route "exact" by default
    component:"PageNotFound",
  },
];

const router = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, index) => {
        if (route.path !== "404") {
          if (route.private) {
            return route.noExact ? (
              <ProtectedRoute
                key={index}
                path={route.path}
                component={views(route.component)}
              />
            ) : (
              <ProtectedRoute
                key={index}
                exact
                path={route.path}
                component={views(route.component)}
              />
            );
          } else {
            return route.noExact ? (
              <Route
                key={index}
                path={route.path}
                component={views(route.component)}
              />
            ) : (
              <Route
                key={index}
                exact
                path={route.path}
                component={views(route.component)}
              />
            );
          }
        } else {
          return <Route key={index} component={views(route.component)} />;
        }
      })}
    </Switch>
  </Suspense>
);

export default router;

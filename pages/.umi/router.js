import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../index').default,
    exact: true,
  },
  {
    path: '/goods',
    component: require('../goods').default,
    exact: true,
  },
  {
    path: '/about',
    component: require('../about').default,
    Routes: [require('../../routers/PrivateRoute.js').default],
    exact: true,
  },
  {
    path: '/users',
    component: require('../users/_layout').default,
    routes: [
      {
        path: '/users',
        component: require('../users/index').default,
        exact: true,
      },
      {
        path: '/users/:id',
        component: require('../users/$id').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('E:/00fromnowon/01profession/01-demo/react/umi-demo/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/login',
    component: require('../login').default,
    exact: true,
  },
  {
    component: require('../notfound').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('E:/00fromnowon/01profession/01-demo/react/umi-demo/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return <Router history={history}>{renderRoutes(routes, props)}</Router>;
}

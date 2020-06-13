import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import PrivateRoute from '@@/PrivateRoute'
import {  Login, Home, } from './assembly'
const routes = [
  {
    path: "/",
    component: Home,
  }
]
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
      {
        routes.map( (v,i)=> {
          return (
            <PrivateRoute key={i} path={v.path} component={v.component}>{renderRoutes(routes)}</PrivateRoute>
          )
        })
      }
      </Switch>
      </BrowserRouter>
    )
  }
}

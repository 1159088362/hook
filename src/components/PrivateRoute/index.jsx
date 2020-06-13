import React from 'react'
import { Route, withRouter } from 'react-router-dom'

/**
 * 统一路由监听
 * 登录后不做任何处理 未登录跳转到登录页
 */
export default @withRouter
class PrivateRoute extends React.PureComponent {
  constructor (props) {
    super(props)
    this.redirect(props)
  }
  
  // nextProps
  componentWillReceiveProps (np) {
    this.redirect(np)
  }

  // 重定向
  redirect = np => {
    const { history } = np
    const { Authority } = this.props
    
    // 判断是否登录了
    if (!localStorage.getItem('token')) {
      const pathname = history.location.pathname
      // 如果是登录页 不跳转 否则会死循环
      if (!pathname.includes('login')) {
        history.push('/login')
      }
    }

    // 权限拦截
    Authority && history.push('/login')
  }

  render () {
    const { path, component } = this.props
    return <Route path={path} component={component} />
  }
}

import * as React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { BackTop } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { menu } from '@/menu'
import Header from '../header'
import './index.less'
import Footer from '../footer'

// 页面布局
const Layout: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {menu.map((item) => (
        <Route
          key={item.key}
          exact={typeof item.exact !== 'undefined' ? item.exact : true}
          path={item.path}
        >
          {withRouter(item.component)}
        </Route>
      ))}
    </Switch>
    <Footer />
    <BackTop>
      <VerticalAlignTopOutlined style={{ fontSize: '30px', color: '#08c' }} />
    </BackTop>
  </BrowserRouter>
)

export default Layout

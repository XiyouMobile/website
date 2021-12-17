import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import Android from './android'
import ios from '../memberstyle/ios'
import Web from '../memberstyle/web'
import Server from '../memberstyle/server'
import './index.less'

// 成员
const Member: React.FC = () => {
  const [state, setState] = React.useState(1)
  const { path, url } = useRouteMatch()

  return (
    <div>
      <div className="member-content">
        <div className="theme">
          <div>移动应用开发实验室</div>
        </div>
        <div className="group">
          <Link
            to={`${url}/Android`}
            className={state === 0 ? 'Android' : 'grouplist'}
            onClick={() => setState(0)}
          >
            Android
          </Link>
          <Link
            to={`${url}/ios`}
            className={state === 2 ? 'Android' : 'grouplist'}
            onClick={() => setState(2)}
          >
            iOS
          </Link>
          <Link
            to={`${url}/Web`}
            className={state === 3 ? 'Android' : 'grouplist'}
            onClick={() => setState(3)}
          >
            Web
          </Link>
          <Link
            to={`${url}/Server`}
            className={state === 4 ? 'Android' : 'grouplist'}
            onClick={() => setState(4)}
          >
            Server
          </Link>
        </div>
      </div>
      <div className="groupMessage">
        <Switch>
          <Route path={`${path}/Android`} component={Android} />
          <Route path={`${path}/ios`} component={ios} />
          <Route path={`${path}/Web`} component={Web} />
          <Route path={`${path}/Server`} component={Server} />
          <Redirect to="/member/memberstyle/Android" />
        </Switch>
      </div>
    </div>
  )
}

export default Member

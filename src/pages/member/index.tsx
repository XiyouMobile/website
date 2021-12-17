import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import Graduate from '../graduate/index'
import MemberStyle from '../member-style/index'
import './index.less'

const Member: React.FC = () => {
  const { path, url } = useRouteMatch()
  const [state, setState] = React.useState(0)

  return (
    <div className="wrapper-max">
      <div className="member-header">
        <div className="mask" />
        <span className="title">成员</span>
        <br />
        <span className="describe">一点一滴 记录我们前进的脚步</span>
        <br />
        <span className="describe">一心一意 走过我们成功的道路</span>
      </div>
      <div className="member-router">
        <Link
          to={`${url}/graduate`}
          className={state === 0 ? 'memberClick' : 'member-item'}
          onClick={() => {
            setState(0)
          }}
        >
          毕业生
        </Link>
        <Link
          to={`${url}/memberstyle`}
          className={state === 1 ? 'memberClick' : 'member-item'}
          onClick={() => {
            setState(1)
          }}
        >
          成员风采
        </Link>
      </div>
      {/* <div className="memberList"> */}
      <Switch>
        <Route path={`${path}/graduate`} component={Graduate} />
        <Route path={`${path}/memberstyle`} component={MemberStyle} />
        <Redirect to="/member/graduate" />
      </Switch>
      {/* </div> */}
    </div>
  )
}

export default Member

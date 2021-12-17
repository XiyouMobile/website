import * as React from 'react'
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import { getGraduateMemberInfo } from '@/api/member'
import year from './year'
import './index.less'

// 成员
const Member: React.FC = () => {
  const { path, url } = useRouteMatch()
  const [state, setState] = React.useState(0)
  const yearslist = [
    { id: 2017, index: 0 },
    { id: 2016, index: 1 },
    { id: 2015, index: 2 },
    { id: 2014, index: 3 },
    { id: 2013, index: 4 },
    { id: 2012, index: 5 },
    { id: 2011, index: 6 },
    { id: 2010, index: 7 },
    { id: 2009, index: 8 }
  ]
  return (
    <div className="graduate">
      <div className="yearContent">
        {yearslist.map((item) => (
          <Link
            key={item.id}
            to={`${url}/${item.id}`}
            className={item.id === 2009 ? 'years' : 'year'}
            style={{
              backgroundColor: state === item.index ? '#2e6acc' : 'white',
              color: state === item.index ? 'white' : '#2e6acc'
            }}
            onClick={(e) => {
              setState(item.index)
            }}
          >
            <span>{item.id}</span>
          </Link>
        ))}
      </div>
      <div className="graduateMessage">
        <Switch>
          {yearslist.map((item) => (
            <Route key={item.id} path={`${path}/${item.id}`} component={year} />
          ))}
          <Redirect to={`${path}/2017`} />
        </Switch>
      </div>
    </div>
  )
}

export default Member

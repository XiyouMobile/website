import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { filter } from 'remeda'
import useControlHeader from '@/hooks/useScroll'
import { menu } from '@/menu'
import './index.less'

interface Menu {
  key: string
  path: string
  title: string
  component: React.FC<any>
  notInMenu?: undefined | boolean
  opacity?: boolean
}

const Header: React.FC = () => {
  const realMenu: Menu[] = filter((menuItem: Menu) => !menuItem.notInMenu)(menu)
  const location = useLocation()
  const res = realMenu.find((item) => item.path === location.pathname)?.opacity
  const { hidden, scrollerHeight, opacity, setOpacity } = useControlHeader(true)
  return (
    <header
      className={`header ${!opacity && scrollerHeight === 0 ? '' : 'opacity'} ${
        hidden ? 'hidden' : ''
      }`}
    >
      <div className="logo" />
      <div className="menu-router">
        {realMenu.map((item) => (
          <Link
            className="menu-item"
            key={item.key}
            to={item.path}
            onClick={() => {
              setOpacity(typeof item.opacity === 'undefined' ? true : item.opacity)
            }}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header

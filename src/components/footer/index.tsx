import * as React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { WechatFilled } from '@ant-design/icons'
import './index.less'

const Footer: React.FC = () => {
  const nowTime = new Date()
  const [iconState, setIconState] = useState(false)
  const height = window.screen.height
  const workHeight = document.body.scrollHeight
  return (
    <footer className={['footerAll', workHeight < height ? 'footer_position' : 'null'].join(' ')}>
      <div className="footer_wrap">
        <div className="footer_top">
          <Link to="">
            <div className="footer_top_logo" />
          </Link>
        </div>
        <div className="middle_box">
          <h2>关于我们</h2>
          <div className="footer_relation">
            <div className="relation">
              <span className="title">bilibili</span>
              <a
                className="text"
                href="https://space.bilibili.com/522089976?from=search&seid=14762351147115538165&spm_id_from=333.337.0.0"
              >
                西邮3G实验室
              </a>
            </div>
            <div className="relation">
              <span className="title">交流QQ</span>
              <span className="text">315602317</span>
            </div>
            <div className="relation">
              <span className="title">官方微信</span>
              <span
                className="text"
                onMouseOver={() => setIconState(true)}
                onMouseLeave={() => {
                  setIconState(false)
                }}
              >
                <WechatFilled />
              </span>
            </div>
            <div className="relation">
              <span className="title">官方微博</span>
              <span className="text">西邮移动应用开发实验室</span>
            </div>
            <img
              className={iconState ? 'qr_code' : 'ql_code'}
              src="https://mobile.xupt.edu.cn/src/images/wxqr.jpg"
            />
          </div>
          <img className="img_code" src="https://mobile.xupt.edu.cn/src/images/wxqr.jpg" />
        </div>
        <div className="footer_content text_content">
          Copyright @
          <span>{nowTime.getFullYear()}</span>
          西安邮电大学移动应用开发实验室 All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

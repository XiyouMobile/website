import * as React from 'react'
import { Carousel } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { fetchActivityList } from '@api/activity'
import { fetchWikiList } from '@api/wiki'
import { IWikiItem } from '@api/wiki/interface'
import { IActivityItem } from '@api/activity/interface'
import { WikiHomeItem } from '@components/wiki-item'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import ActivityItem from '@/components/activity-item'
import './index.less'

const Home: React.FC = () => {
  const [activityList, setActivityList] = React.useState<IActivityItem[]>([])
  const [wikiList, setWikiList] = React.useState<IWikiItem[]>([])
  React.useEffect(() => {
    Promise.allSettled([fetchActivityList({ size: 6 }), fetchWikiList({ size: 6 })]).then((res) => {
      if (res[0].status === 'fulfilled' && res[0].value) {
        setActivityList(res[0].value.dataList)
      }
      if (res[1].status === 'fulfilled' && res[1].value) {
        setWikiList(res[1].value.dataList)
      }
    })
  }, [])

  return (
    <div className="home-wrapper">
      <div className="content-header">
        <Carousel effect="fade" autoplay adaptiveHeight>
          <div className="carousel-item ios" />
          <div className="carousel-item android" />
          <div className="carousel-item web" />
          <div className="carousel-item server" />
        </Carousel>
      </div>
      <div className="content">
        <LazyLoad height={3000}>
          <div className="activity-home-container">
            <div className="title">实验室动态</div>
            <div className="list-wrapper">
              {activityList.map((item) => (
                <ActivityItem key={item.id} activityInfo={item} />
              ))}
            </div>
            <div className="activity-more">
              <Link to="/activity">
                <span className="text">查看更多</span>
                <CaretRightOutlined style={{ fontSize: '22px', color: '#08c' }} />
              </Link>
            </div>
          </div>
        </LazyLoad>
      </div>
      <div className="content">
        <div className="wiki-home-wrapper">
          <div className="title">实验室wiki</div>
          <div className="list-wrapper">
            {wikiList.map((item) => (
              <WikiHomeItem key={item.id} {...item} />
            ))}
            <div className="more-wiki">
              <Link to="/wiki">
                <span className="text">查看更多</span>
                <CaretRightOutlined style={{ fontSize: '22px', color: '#08c' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

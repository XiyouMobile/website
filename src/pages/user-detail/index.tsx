import * as React from 'react'
import { useParams } from 'react-router'
import { message, Avatar } from 'antd'
import { getMemberDetail } from '@api/member/index'
import { GetMemberMessage } from '@api/member/interface'
import { UserOutlined, ApartmentOutlined, TagsOutlined, HomeOutlined } from '@ant-design/icons'
import Footer from '@/components/footer'
import './index.less'

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = React.useState<GetMemberMessage>()
  React.useEffect(() => {
    getMemberDetail(id).then((res) => {
      if (res) {
        setData(res)
        return
      }
      message.error('服务器开小差了...')
    })
  }, [id])
  return (
    <>
      <div className="user-detail-wrap">
        {data && (
          <div className="info">
            <div className="avatar">
              <Avatar size={300} src={data.mienImg} />
            </div>
            <div className="user-info">
              <div>
                <div>
                  <UserOutlined />
                  <span className="info-item">{data.name}</span>
                </div>
                <div>
                  <ApartmentOutlined />
                  <span className="info-item">{data.classGrade}</span>
                </div>
                {data.company && (
                  <div>
                    <HomeOutlined />
                    <span className="info-item">{data.company}</span>
                  </div>
                )}
                {data.signature && (
                  <div>
                    <TagsOutlined />
                    <span className="info-item">{data.signature}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="wiki" />
      </div>
    </>
  )
}

export default UserDetail

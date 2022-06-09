import { Col, Row } from 'antd'
import React, { FC } from 'react'
import './index.less'
import { Introduction, summary } from '@/common/constant'

const Summary: FC<{ summary: string }> = ({ summary }) => (
  <>
    <h3 className="about-us-summary-title">
      <strong>关于我们</strong>
    </h3>
    <article className="about-us-summary-article">{summary}</article>
  </>
)

const AboutText: FC<{ text: string; title: string }> = ({ text, title }) => (
  <>
    <h4 className="about-body-each-title">{title}</h4>
    <strong className="about-body-each-text">{text}</strong>
  </>
)

const AboutPicture: FC<{ picture_url: string }> = ({ picture_url }) => (
  <div className="about-us-intro-picture">
    <img src={picture_url} alt="picture" className="about-us-intro-picture" />
  </div>
)

const About: FC<{ text: string; picture_url: string; reverse: boolean; title: string }> = ({
  text,
  picture_url,
  reverse,
  title
}) => {
  const Render: FC<{ reverse: boolean; offset: number }> = ({ reverse, offset }) => (
    <Col span={reverse ? 6 : 8} offset={offset}>
      {reverse ? (
        <AboutText text={text} title={title} />
      ) : (
        <AboutPicture picture_url={picture_url} />
      )}
    </Col>
  )
  return (
    <Row className="about-body-each">
      <Render reverse={reverse} offset={4} />
      <Render reverse={!reverse} offset={2} />
    </Row>
  )
}

const AboutUs: FC = () => (
  <div className="about-us">
    <Row className="about-us-band">
      <Col span={12} offset={4}>
        <h1>移动应用开发</h1>
        <h1>实验室</h1>
        <h2>移动应用开发实验室，强的很</h2>
        <h2>移动应用开发实验室，强的很</h2>
        <h2>移动应用开发实验室，强的很</h2>
        <h2>移动应用开发实验室，强的很</h2>
      </Col>
      <Col span={14} />
    </Row>
    <Row className="about-us-summary">
      <Col span={16} offset={4}>
        <Summary summary={summary} />
      </Col>
    </Row>
    <div className="about-us-body">
      {Object.entries(Introduction).map(([s, v], i) => (
        <About key={s} reverse={i % 2 === 0} {...v} title={s} />
      ))}
    </div>
  </div>
)

export default AboutUs

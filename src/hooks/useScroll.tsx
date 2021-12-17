import * as React from 'react'

const useControlHeader = (initOpacity: boolean) => {
  const [scrollerHeight, setScrollerHeight] = React.useState(0)
  const [hidden, setHidden] = React.useState(false)
  const [opacity, setOpacity] = React.useState(initOpacity)

  React.useEffect(() => {
    const fn = () => {
      setScrollerHeight((item) => {
        setHidden(item <= document.documentElement.scrollTop)
        return document.documentElement.scrollTop
      })
    }
    document.addEventListener('scroll', fn)
    return () => {
      document.removeEventListener('scroll', fn)
    }
  }, [])
  return { hidden, scrollerHeight, opacity, setOpacity }
}

export default useControlHeader

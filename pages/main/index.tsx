import Navigation from '../../components/Navigation'
import Home from './components/home'
import RoadMap from './components/roadmap'
import { useState } from 'react'

const Main = () => {
  const [current, setCurrent] = useState(0)
  return <>
    <Navigation indexPage={current}></Navigation>
    <Home></Home>
    <RoadMap></RoadMap>
  </>
}

export default Main
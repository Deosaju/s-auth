import Navigation from '../../components/Navigation'
import Home from './components/home'
import HomeMap from './components/homeMap'
import Team from './components/team'
import { useState } from 'react'

const Main = () => {
  const [current, setCurrent] = useState(0)
  return <>
    <Navigation indexPage={current}></Navigation>
    <Home></Home>
    <HomeMap></HomeMap>
    <Team></Team>
  </>
}

export default Main
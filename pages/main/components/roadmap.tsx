import styled from "styled-components"
import Image from "next/image"

import banner from "public/images/roadmap/Roadmap.png"

const Banner = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  height: 80%;
  width: 80%;
`

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const HomeImage = () => {

  return <Container>
    <Banner>
      <Image src={banner} alt="logo" layout="fill" objectFit="contain"/>
    </Banner>
  </Container>

}

export default HomeImage
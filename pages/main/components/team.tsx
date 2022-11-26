import styled from "styled-components"
import Image from "next/image"

import banner from "public/images/team.png"

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

const TeamImage = () => {

  return <Container>
    <Banner id="team">
      <Image src={banner} alt="logo" layout="fill" objectFit="contain"/>
    </Banner>
  </Container>

}

export default TeamImage
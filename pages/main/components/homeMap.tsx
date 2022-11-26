import Navigation from "../../../components/Navigation";
import { useState } from "react";
import RoadImage from "./roadImage";
import styled from "styled-components";
import footerPic from 'public/images/home/footer.png'
import Image from "next/image";
import SocialMedia from "../../../components/SocialMedia";

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 648px;
  ${({ theme }) => theme.sm} {
    position: relative;
    height: 600px;
    width: 624px;
    margin: 80px auto 32px;
  }
}
`
const HomeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('./images/home/left-top.png');
  background-size: 100%;
  background-opacity: 0.9;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #0F0F0F;
`
const FooterContainer = styled(ImageContainer)`
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 30px;
  width: 100%;
  height: 40px;
  padding-left: 2px;
  
`

const Home = () => {

    const [current, setCurrent] = useState(0)
    return (
        <>
            <HomeContainer id="roadmap">
                <Navigation indexPage={current}></Navigation>
                <ImageContainer>
                    <RoadImage></RoadImage>
                </ImageContainer>
                <SocialMedia></SocialMedia>
                
            </HomeContainer>

        </>
    );
};

export default Home;
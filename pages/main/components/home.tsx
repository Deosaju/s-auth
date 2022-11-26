import Navigation from "../../../components/Navigation";
import { useState } from "react";
import HomeImage from "./homeImage";
import styled from "styled-components";

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
  ${({ theme }) => theme.sm} {
    position: relative;
    height: auto;
    display: block;
  }
`

const Home = () => {

    const [current, setCurrent] = useState(0)
    return (
        <>
            <HomeContainer>
                <Navigation indexPage={current}></Navigation>
                <ImageContainer>
                    <HomeImage></HomeImage>
                </ImageContainer>
            </HomeContainer>

        </>
    );
};

export default Home;
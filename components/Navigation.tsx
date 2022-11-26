import Link from "next/link";
import Logo from "./Logo"
import styled from 'styled-components'
import { useState } from "react";

const Position = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all .3s ease-in-out;
  padding: 40px 100px;
  
`

const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 180px 1fr 200px;
  align-items: center;
  justify-content: start;
  
`

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
`

const MenuItem = styled.a<{ active?: boolean }>`
  display: inline-block;
  height: 100%;
  padding: 0 8px;
  margin: 0 8px;
  text-align: center;
  color: ${(p) => p.active ? '#FFFFFF' : '#999999'};
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #FFFFFF;
  }
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`


const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
`

const LaunchApp = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  font-size: 14px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
`

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  color: #FFFFFF;
  padding-top: 20px;
`

const ContactItem = styled.div`
  display: block;
  padding: 10px;
  font-size: 14px;
`

const RemindingText = styled.div`
  font-family: 'Gothic720BT-LightB';
  font-size: 12px;
`

interface NavigationProps {
  indexPage: number
}

const Navigation = ({ indexPage }: NavigationProps) => {

  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)

  return <>
    <Position>
      <Box>
        <Logo />
        <MenuContainer>
          <MenuItem active={indexPage === 0} >
            <Link href="#home" scroll={false}> HOME </Link>
          </MenuItem>
          <MenuItem active={indexPage === 6} >
            <Link href="#roadmap" scroll={true}>ROADMAP</Link>
          </MenuItem>
          <MenuItem >
            <Link href="#team" >TEAM</Link>
          </MenuItem>
          <MenuItem onClick={() => setIsContactOpen(true)} >
            CONTACT
          </MenuItem>
        </MenuContainer>
        <ButtonContainer>
          <Link href="/" target="_blank"><LaunchApp>{'LAUNCH DEMO >>'}</LaunchApp></Link>
        </ButtonContainer>
      </Box>
    </Position>
  </>
}

export default Navigation;

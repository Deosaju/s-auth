import styled from "styled-components"
import Image from "next/image"
import { CSSProperties } from "react"

import github from "public/images/github.png"
import medium from "public/images/medium.png"
import twitter from "public/images/twitter.png"
import discord from "public/images/discord.png"


const SocialMediaContainer = styled.div`
  position: fixed;
  right: 100px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  
`

const SocialIcon = styled.a`
  position: relative;
  display: inline-block;
  margin: 18px auto;
  width: 25px;
  height: 25px;
  
`

export default function SocialMedia(style?: CSSProperties) {
  return <SocialMediaContainer style={style}>
    <SocialIcon href="/" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={medium} alt="Medium"/>
    </SocialIcon>
    <SocialIcon href="/" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={twitter} alt="Twitter"/>
    </SocialIcon>
    <SocialIcon href="/" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={github} alt="Github"/>
    </SocialIcon>
    <SocialIcon href="/" target="_blank">
      <Image layout="fill" objectFit="contain" quality={100} src={discord} alt="Discord"/>
    </SocialIcon>
  </SocialMediaContainer>
}
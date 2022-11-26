import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./main'), {
  ssr: false
})

const Home: NextPage = () => {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
      <meta name="description" content="1's is a decentralized KYC solution based on TPA (Third-Party Autherization) and ZKP (Zero-Knowledge Proof)" />
      <meta name="keywords" content="1's, KYC, Privacy, zero-knowledge proofs" />
      <meta
        name="twitter:description"
        content="1's is a decentralized KYC solution based on TPA (Third-Party Autherization) and ZKP (Zero-Knowledge Proof)"
      />
      <meta name="twitter:title" content="1's | Privacy-preserving KYC Solution" />
      <meta property="og:title" content="1's | Privacy-preserving KYC Solution" />
      <meta property="og:site_name" content="1's | Privacy-preserving KYC Solution" />
      <meta property="og:description" content="1's is a decentralized KYC solution based on TPA (Third-Party Autherization) and ZKP (Zero-Knowledge Proof)" />
      <title>{`1's | Privacy-preserving KYC Solution`}</title>
      <link rel="icon" href="/images/Logo.png" />
    </Head>
    <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
  </>

}

export default Home
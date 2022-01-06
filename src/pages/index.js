import Header from 'components/header'
import Hero from 'components/hero'
import Main from 'components/main'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>FrontendMentor CrowdFunding - Ajid Stark (@ajid2)</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Hero>
        <Header />
      </Hero>
      <Main />
    </>
  )
}

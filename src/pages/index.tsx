import React from 'react'
import Head from 'next/head'

import Menu from '../components/Menu'
import ContentWrapper from '../components/ContentWrapper'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Teste teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Menu />
        <ContentWrapper>
          <h1>Welcome</h1>
        </ContentWrapper>
      </div>
    </div>
  )
}

export default Home

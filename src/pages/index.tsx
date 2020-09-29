import React from 'react'
import Head from 'next/head'

import Menu from '../components/Menu'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Teste teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
      </main>
    </div>
  )
}

export default Home

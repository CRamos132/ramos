import React, { useEffect } from 'react'
import Head from 'next/head'

import Menu from '../components/Menu'
import GetApi from '../repositories/GetApi'

const Home: React.FC = () => {
  useEffect(() => {
    GetApi('dale')
  })
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

import React from 'react'
import Head from 'next/head'

import getAPI from '../repositories/GetApi'
import Menu from '../components/Menu'
import ContentWrapper from '../components/ContentWrapper'

import { GitRes } from '../types/GitType'

import styled from 'styled-components'

export async function getStaticProps(): Promise<{ props: { user: GitRes } }> {
  const user = await getAPI('https://api.github.com/users/heitorramos132').then(
    res => {
      return res
    }
  )
  return {
    props: {
      user: user
    }
  }
}

const Image = styled.img`
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  @media (max-width: 800px) {
    width: 50vw;
    height: 50vw;
  }
`

const Contact = (props: { user: GitRes }): JSX.Element => {
  const { user } = props
  return (
    <div>
      <Head>
        <title>Teste teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <ContentWrapper>
          <Image src={user?.avatar_url} />
          <h1>{user?.name}</h1>
          <p>{user?.bio}</p>
        </ContentWrapper>
      </main>
    </div>
  )
}

export default Contact

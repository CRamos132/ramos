import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type ItemProps = {
  title: string
  url: string
  label: string
}

const ItemWrapper = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  padding: 3vh;
  &:focus,
  &:hover {
    background-color: white;
    opacity: 0.5;
  }
`

const ItemTitle = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`

const SidebarItem: React.FC<ItemProps> = ({ title, url, label }) => {
  return (
    <ItemWrapper>
      <Link href={url} passHref>
        <ItemTitle aria-label={label}>{title}</ItemTitle>
      </Link>
    </ItemWrapper>
  )
}

export default SidebarItem

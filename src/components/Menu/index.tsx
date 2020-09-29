import React from 'react'
import Sidebar from '../Sidebar'
import SidebarItem from '../SidebarItem'

const Menu: React.FC = () => {
  return (
    <Sidebar>
      <SidebarItem title={'Home'} url={'/'} label={'Home page'} />
      <SidebarItem title={'Contact'} url={'contact/'} label={'Contact page'} />
      <SidebarItem title={'About'} url={'contact'} label={'About page'} />
      <SidebarItem title={'GitHub'} url={'github'} label={'GitHub profile'} />
    </Sidebar>
  )
}

export default Menu

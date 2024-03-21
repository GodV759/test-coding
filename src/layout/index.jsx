import React from 'react'
import { DefaultLayoutWrapper, ContentWrapper } from './style'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
      <DefaultLayoutWrapper>
          <ContentWrapper>
              <Outlet />
          </ContentWrapper>
    </DefaultLayoutWrapper>
  )
}

export default Layout
import React from 'react'

import { HeaderContainer, Title, IconBox, Icon } from './style.js'

const Header = () => {
  
  return (
    <HeaderContainer>
      <IconBox>
        <Icon> ★ </Icon>
      </IconBox>
      <Title> Termu </Title>
      <IconBox>
        <Icon> ♥️ </Icon>
      </IconBox>
    </HeaderContainer>
  )
}

export { Header }

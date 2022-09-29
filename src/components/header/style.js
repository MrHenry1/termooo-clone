import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 55px;
  
  display:flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0px 10px;
`

export const Title = styled.h1`
  font-family: 'Inter Tight', sans-serif;
  font-weight: bold;
  font-size: 30pt;
  color: #EEEEEE;
`

export const IconBox = styled.span`
  width: 28px;
  height: 28px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 2px solid #00ADB5;
  border-radius: 5px;
`

export const Icon = styled.p`
  font-family: 'Inter Tight', sans-serif;
  font-weight: bold;
  font-size: 14pt;
  color: #00ADB5;
`

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 5px;
`

export const GameTables = styled.div`
  display:flex;
  flex-direction: column;
  
  gap: 5px;
`

export const InputArea = styled.div`
  width: 100%;
  height: 20%;
  
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`

export const Input = styled.input`
  width: 230px;
  height: 40px;
  
  
  border-radius: 5px;
  border: 2px solid #00ADB5;
  
  background: #15181d;
  color: #EEEEEE;  
  font-family: 'Inter Tight', sans-serif;
  font-weight: bold;
  font-size: 11pt;
  
  text-align: center;
`

export const Button = styled(motion.button)`
  width: 120px;
  height: 35px;
  
  padding: 5px;
  
  border-radius: 5px;
  
  display:flex;
  align-items: center;
  justify-content: center;
  
  color: #EEEEEE;  
  font-family: 'Inter Tight', sans-serif;
  font-weight: bold;
  font-size: 11pt;
  
  border: 0;
  
  background: #00ADB5;
  
  transition: all .25s;
  
  &:hover {
    opacity: 0.7;
  }
`

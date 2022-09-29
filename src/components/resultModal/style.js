import styled from 'styled-components'

import { motion } from 'framer-motion'

export const ResultModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  position: absolute;
  
  background: #00000094;
  
  display: ${props => props.isOpened ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  
  z-index: 999;
`

export const Modal = styled.div`
  width: 80%;
  height: 47%;
  
  background: #1b1d23;
  
  display:flex;
  flex-direction: column;;
  
  border-radius: 5px;
`

export const ModalHeader = styled.header`
  width: 100%;
  height: 80px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #00ADB5;
  font-weight: bold;
  font-size: 20pt;
  font-family: 'Inter Tight', sans-serif;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 60%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
` 

export const Word = styled.span`
  width: 70px;
  height: 40px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 3px dashed #00ADB5;
  border-radius: 6px;
  
  background: #00ADB533;
  color: #00ADB5;
  font-weight: bold;
  font-size: 12pt;
  font-family: 'Inter Tight', sans-serif;
  
`

export const Message = styled.p`
  color: #EEEEEE;
  font-weight: bold;
  font-size: 15pt;
  font-family: 'Inter Tight', sans-serif;
`

export const SubMessage = styled.p`
  color: #DDDDDD;
  font-weight: bold;
  font-size: 13pt;
  font-family: 'Inter Tight', sans-serif;
`

export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalButton = styled(motion.button)`
  width: 110px;
  height: 40px;
  
  border: 0;
  border-radius: 5px;
  
  background: #00ADB5;
  color: #EEEEEE;
  font-weight: bold;
  font-size: 11pt;
  font-family: 'Inter Tight', sans-serif;
  text-align: center;
  
  box-shadow: 0 0 5px 1px #00ADB566;
`

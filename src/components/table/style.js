import styled from 'styled-components'
import { motion } from 'framer-motion'

let colorsOfBlocks = {
  correct: '#5eb458',
  otherPlace: '#f6bb1b',
  wrong: '#393E46',
  inactive: '#212327'
}

export const TableList = styled.div`
  width: 100%;
  
  display:flex;
  align-items: center;
  justify-content: center;
  gap:5px;
`

export const TableBlock = styled(motion.div)`
  width: 50px;
  height: 50px;
  
  display:flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 5px;
  
  background: ${(props) => colorsOfBlocks[props.status]};
  
  color: white;
  font-size: 18pt;
  font-weight: 800;
  font-family: 'Inter Tight', sans-serif;
`

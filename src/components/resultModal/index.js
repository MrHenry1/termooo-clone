import React from 'react'

import { useResultHook } from '../../../hooks/useResult.js'

import { ResultModalContainer, Modal, ModalHeader, ModalContent, Box, Word, Message, SubMessage, ModalFooter, ModalButton } from './style.js'

const ResultModal = () => {
  
  const { result } = useResultHook()

  return (
    <ResultModalContainer isOpened={result.result != null} >
      <Modal>
        <ModalHeader>
          Resultado
        </ModalHeader>
        <ModalContent>
          <Box>
            <SubMessage>
              A palavra certa era:
            </SubMessage>
            <Word> { result.correctWord } </Word>
          </Box>
          <Box>
            <Message> {result.result == "win" ? 'PARABENS!' : 'GAME OVER'} </Message>
            <SubMessage> {result.result == "win" ? `Voce conseguiu em ${result.attempts} tentivas!` : 'Boa sorte na proxima vez!'} </SubMessage>
          </Box>
        </ModalContent>
        <ModalFooter>
          <ModalButton
            initial={{ color: '#EEEEEE', background: '#00ADB5', boxShadow: '0 0 5px 1px #00ADB566'}}
            whileTap={{ color: '#15181d', background: '#EEEEEE', boxShadow: '0 0 5px 1px #EEEEEE66', scale: 0.9 }}
            transition = { { type: "tween", duration: 0.1, stiffness: 1000 } }
            
            onClick={() => window.location.reload()}
          >
            Ir denovo!
          </ModalButton>
        </ModalFooter>
      </Modal>
    </ResultModalContainer>
  )
}

export { ResultModal }

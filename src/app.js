import React, { useState } from 'react'

import { Container } from './globalStyles.js'

import { Header } from './components/header/index.js'
import { Game } from './components/game/index.js'
import { ResultModal } from './components/resultModal/index.js'
// import { Chat } from './components/chat/index.js'

export const ResultContext = React.createContext({})

const App = () => {
  
  const [result, setResult] = useState({ correctWord: null, result: null, attempts: null })
  
  return (
    <Container>
      <ResultContext.Provider value={{ result, setResult }}>
        <ResultModal />
        <Header />
        <Game />
      </ResultContext.Provider>
    </Container>
  )
}

export default App

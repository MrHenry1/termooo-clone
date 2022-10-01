import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'toast';

import { useResultHook } from '../../../hooks/useResult.js'
import { getWord, checkWord } from '../../../utils/getWord.js'

import {GameContainer, GameTables, InputArea, Input, Button} from './style.js'

import { Table } from '../table/index.js'

const Game = () => {
  
  const [wordWrinting, setWordWriting] = useState('')
  const [guesses, setGuesses] = useState([null, null, null, null, null, null])
  const [actual, setActual] = useState(0)
  
  const [word, setWord] = useState('')
  
  const { result, setResult } = useResultHook()
  
  useEffect(() => {
    const wordToFind = getWord()
    
    setWord(wordToFind)
    
    setResult(prev => ({ ...prev, correctWord: wordToFind }))
  }, [])
  
  function guessAWord(wordGuessed) {
    
    if(wordGuessed.length != 5 || !wordGuessed) return
    
    wordGuessed = checkWord(wordGuessed)
    
    toast.remove()
    
    if(!wordGuessed) {
      toast('Word not registered!', {
        position: 'botton-center',
        style: {
          background: '#393E46',
          border: '3px dashed #f6bb1b',
          color: '#EEEEEE',
          fontWeight: 'bold',
          fontFamily: '"Inter Tight", sans-seric',
        },
        icon: '😓'
      })
      
      return;
    }
    
    if(guesses.includes(wordGuessed)) {
      toast('Word already guessed!', {
        position: 'botton-center',
        style: {
          background: '#393E46',
          border: '3px dashed #00ADB5',
          color: '#EEEEEE',
          fontWeight: 'bold',
          fontFamily: '"Inter Tight", sans-seric',
        },
        icon: '😕'
      })
      
      return;
    }
    
    setGuesses(prev => prev.map((item, index) => index == actual ? wordGuessed : item ))
    
    if(wordGuessed === word) {
      toast('Good Job', {
        position: 'botton-center',
        style: {
          background: '#393E46',
          border: '3px dashed #00ADB5',
          color: '#EEEEEE',
          fontWeight: 'bold',
          fontFamily: '"Inter Tight", sans-seric',
        },
        icon: '🎊'
      })
      
      setResult(prev => ({...prev, result: 'win', attempts: actual + 1}))
      
      return;

    }
    
    if(actual === 5) {
      toast.error('Game Over', {
        position: 'botton-center',
        style: {
          background: '#393E46',
          border: '3px dashed #ff5959',
          color: '#EEEEEE',
          fontWeight: 'bold',
          fontFamily: '"Inter Tight", sans-seric',
        }
      }) 
      
      setResult(prev => ({...prev, result: 'lose', attempts: null}))
      
      return;
    }
    
    setWordWriting('')
    setActual(prev => prev + 1)
  }
  
  return (
    <GameContainer>
      <Toaster />
      <GameTables>
        {
          guesses.map((guess, i) => (
            <Table isActual={actual == i} key={i} rightWord={word.split('')} guess={guess} />
          ))
          
        }
      </GameTables>
      <InputArea>
        <Input value={wordWrinting} minLength="5" maxLength="5" onChange={(e) => e.target.value.length <= 5 && setWordWriting(e.target.value)} onFocus={() => toast.remove()} placeholder="Type a guess!" />
        <Button onClick={() => guessAWord(wordWrinting.toUpperCase())}
          transition = { { type: "tween", duration: 0.09, stiffness: 1000 } }
          whileTap = { { scale: 1.1, opacity: 0.7 } }
        > 
          GUESS 
        </Button>
      </InputArea>
    </GameContainer>
  )
}

export { Game }

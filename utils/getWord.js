import latinize from 'latinize'
import { words } from './words.js'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function checkWord(wordGiven) {
  
  if(words.indexOf(wordGiven) >= 0) {
    return words[words.indexOf(wordGiven)]
  }
  
  for(const word of words) {
    if(latinize(word) == latinize(wordGiven)) {
      
      return word
    }
  }
  
  return null
}

export { getWord, checkWord }


const words = ['CARRO', 'BARCO', 'CASCO', 'VACUO', 'MARCO', 'MARÇO', 'CASPA', 'VESPA', 'ZEBRA', 'TIRAR', 'TACAR', 'FARDO', 'JOGAR', 'GIRAR', 'LINHA', 'VINHA', 'DISCA', 'MUSGO', 'NAVIO', 'PORCO', 'POÇAO', 'QUERO', 'LESMA', 'ECOAR', 'RISAO', 'GOSMA', 'GARRA', 'FRUTA', 'GRUTA', 'CURAR', 'FIGOS', 'PALTA', 'SUIÇA', 'SAUNA', 'TANTO', 'VAZIO', 'DADOS', 'PRATO', 'FRACO', 'FORTE', 'BRUTO', 'GRITO', 'PORTE', 'PORTA', 'VILAO', 'VIGOR', 'DARDO', 'AVIAO', 'ASSAR', 'DISCO', 'CISCO', 'FIGOS', 'SONHO', 'BUSCA', 'FUSCA', 'BRITA', 'FRITA', 'CISMA', 'GATOS', 'RATOS', 'CALDA', 'CAUDA', 'FREVO', 'TREVO', 'GREGO', 'GRUTA', 'CAVAR']

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export { getWord }

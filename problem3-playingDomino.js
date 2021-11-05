// PLAYING DOMINO

function playingDomino(cards, deck) {
  
  for (let i = 0; i < cards.length; i++) {
    if (cards[i][0] === deck[0] || cards[i][0] === deck[1] || cards[i][1] === deck[0] || cards[i][1] === deck[1]) {
      return cards[i]
    }
  }
  return []
}
console.log(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3]))
// [3, 4]
console.log(playingDomino([[6, 5], [3, 3], [3, 4], [2, 1]], [3, 6]))
// [6 5]
console.log(playingDomino([[6, 6], [2, 4], [3, 6]], [5, 1]))
// []
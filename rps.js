const ternaryRockPaperScissors = (p1, p2) => {
  return (p1 === p2) ? `It's a draw` :
  ( (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'scissors' && p2 === 'paper' ) )
  ? `Player 1 Wins` : `Player 2 Wins`
}
console.log(ternaryRockPaperScissors('paper', 'rock'));


const rockPaperScissors = (player1,player2) => {
  const choices = ['rock','scissors','paper'];
  const p1 = player1.toLowerCase();
  const p2 = player2.toLowerCase();
  return (p1 === p2) ? 'It\'s a tie' : ((p1 === choices[0] && p2 === choices[1]) || (p1 === choices[1] && p2 === choices[2]) || (p1 === choices[2] && p2 === choices[0])) ? 'Player 1 wins' : 'Player 2 wins';
}  

/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let value = 0;
  hand.forEach((currentCard) => {
    if (currentCard !== 'A') {
      if (currentCard === 'J' || currentCard === 'Q' || currentCard ===  'K') {
        value += 10;
      } else {
        value += parseInt(currentCard);
      }
    }
  });


  hand.forEach((currentCard) => {
    if (currentCard === 'A') {  // add forEach for Aces
      if (value >= 11) {
        value += 1
      }
     else {
      value += 11
     }
    }
  });
  console.log(value);
return value;
}
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

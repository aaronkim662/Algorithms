function golfScoreCalculator(parList, scoreList){
  var total = 0
  for(var i = 0; i<parList.length;i++){
    var subtotal = scoreList[i] - parList[i]
    total += subtotal
  }
  return total
}
golfScoreCalculator('443454444344544443', '353445334534445344')

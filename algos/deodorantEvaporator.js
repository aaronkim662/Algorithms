function evaporator(content, evap_per_day, threshold){
  var total = content
  var percent = (100 - evap_per_day)/100
  var i = 0
  while(total > content * (threshold/100)){
    total = total * percent
    i++
  }

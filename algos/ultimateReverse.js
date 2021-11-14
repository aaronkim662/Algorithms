const ultimateReverse = s => {
  let str=s.join('').split('').reverse()
  let arr=[]
  for (let i=0;i<s.length;i++){
   arr.push(str.splice(0,s[i].length).join(''))
  }
  return arr
}
ultimateReverse(["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer",
         "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"])

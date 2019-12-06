function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let numApple = 0;
    let numOrange = 0;
    console.log('distance', t - s)
    for( let i = 0; i < apples.length; i+=1){
        apples[i] = apples[i] + a
        console.log('apples' + apples[i])
        if(apples[i] > s && apples[i] < t){
            numApple += 1
        }
    }
    for( let i = 0; i < oranges.length; i+=1){
        oranges[i] = oranges[i] + b
        if(oranges[i] > s && oranges[i] < t){
            numOrange += 1
        }
    }
    console.log(numApple);
    console.log(numOrange);
}
    countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])
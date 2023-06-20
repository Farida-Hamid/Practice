var romanToInt = function(s) {
    const romToNum = {"I": 1, "V": 5, "X": 10, "L": 50,"C": 100, "D": 500, "M":1000};
    let index = 0;
    let sum = 0;
    while (index <= s.length){
        if (s[index+1] !== undefined){
            if (romToNum[s[index]] >= romToNum[s[index+1]]){
                sum += romToNum[s[index]];
                index += 1;
            } else {
                sum += romToNum[s[index+1]] - romToNum[s[index]];
                index +=2;
            }
        } else {
            if (romToNum[s[index]]){
                sum += romToNum[s[index]]
            }
            return sum;
        }
    }
};

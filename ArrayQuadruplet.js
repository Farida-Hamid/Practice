function findArrayQuadruplet(arr, s) {
  // your code goes here

  //if (arr.length<4) {
 //   return []
 // }
//  const sorted = arr.sort((a, b) => a -b);
  
//  for(let i = 0; i < sorted.length  -4 ; i++){
//    let firsNumber = sorted[i];
//    for(let j=i+1; j  < sorted.length-3; j++){
  //    let secondNumber = sorted[j];
//        for(let k = j + 1; k < sorted.length - 2; k++) {
  //        let thirdNumber = sorted[k];
    //      for(let l = k + 1; l < sorted.length - 1; l++) {
      //      let fourthNumber = sorted[l];
        //      console.log("checking", firsNumber , secondNumber , thirdNumber , fourthNumber, ((firsNumber + secondNumber + thirdNumber + fourthNumber) == s));
          //  if((firsNumber + secondNumber + thirdNumber + fourthNumber) == s) {
            //  return [firsNumber, secondNumber , thirdNumber , fourthNumber];
          //  }
        //  }
      //  }
    //}
  //}
  //return [];
//
 const n = arr.length;

    //# if there are fewer than 4 items in arr, by
    //# definition no quadruplet exists whose sum is s
    if (n < 4){
        return [];      
    }

   // # sort arr in an ascending order
 // const sorted = arr.sort((a, b) => a -b);
  const sorted = arr.sort((a, b) => a -b);

    for (let i=0; i< n - 4; i++){
      for (let j=i+1; j< n - 3; j++){
           // # r stores the complementing sum
            let r = s - (sorted[i] + sorted[j])

           // # check for sum r in subarray arr[j+1…n-1]
            let low = j + 1, high = n - 1;

            while (low < high){
                if (sorted[low] + sorted[high] < r)
                    {low++}

                else if (sorted[low] + sorted[high] > r)
                    {high--}

               // # quadruplet with given sum found
                else
                    { const results = [sorted[i], sorted[j], sorted[low], sorted[high]].sort()
                    console.log(typeof sorted[i])
                      return results}  
    }}}


    return []
}


console.log(findArrayQuadruplet([4,4,4,4], 16));
//[4,4,4,4]
console.log(findArrayQuadruplet([1,2,3,4,5,9,19,12,12,19], 40));
//[4,5,12,19]

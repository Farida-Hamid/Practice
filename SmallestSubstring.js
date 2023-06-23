
function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  if(arr[0] == str){
    return str
  }
  
  let start = 0, end = arr.length;
  let word = str.substring(start, end);
  let smaallestWord = str;
  let result = '';
  
  while (end < str.length && start < (str.length - arr.length)){
    console.log(`start = ${start} end = ${end} word = ${word} smallest = ${smaallestWord}`);
    
    if(arrayIncludesWord(arr, word)){
      if(word < smaallestWord){
        smaallestWord = word;
      }
      start++;
      end = start + arr.length;
      word = str.substring(start, end);
    } else {
      console.log('update start', end < str.length);
      end < str.length ? start++ : end++;
      word = str.substring(start+1, end+1);      
    }
    
  }
  return result;
  // str contains arr: if word contains all elements check if it's smaller than the smallest word we have
    //if yes replace smmallest word with the current word 
    //else move on to the next word
  
  // Moving to the next word: drop the first letter and check if the current word contains arr
    // if no add the next leter and recheck
    
  
//  let result = "";
//  let arrSubtracted = [...arr];
  
//  for(let i=0; i<str.length; i++){
//    let word = str[i];
    
//    if(arrSubtracted.includes(str[i])){
//      arrSubtracted.splice(arrSubtracted.indexOf(str[i]), 1);
//    }
          
//    for(let j=i+1; j<str.length; j++){
//      word += str[j];
//      if(result.length > 0 && word.length > result.length){
//        break;
//      }
      
//      if(arrSubtracted.includes(str[j])){
//        arrSubtracted.splice(arrSubtracted.indexOf(str[j]), 1);
//      }
      
//     if(arrSubtracted.length == 0){
//        arrSubtracted = [...arr];
        
//        if(result.length == 0){
//          result = word;  
//        }
//        else if(result.length > word.length){
//          result = word;
//        }
//        break;
//      }
//    }
//  }
  
//  return result;
}

function arrayIncludesWord(arr, sub){
  let result = true;
  
  for(let i=0; i<arr.length; i++){
    if(!sub.includes(arr[i])){
      return false;
    }
  }
  return result;
}

console.log(getShortestUniqueSubstring(['x','y','z'], "xyyzyzyx"))

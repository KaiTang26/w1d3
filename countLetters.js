function countLetters(arr){

  var string=arr.join("");

  var count={

  }

  for(var i=0; i<string.length; i++){

    if(string[i] in count){

      count[string[i]]+=1;

    }else{

      count[string[i]]=1;
    }

  }

  return count;
}

console.log(countLetters(process.argv.slice(2)));
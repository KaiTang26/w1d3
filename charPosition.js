// input a string and return the position of each char


function charPosition(arr){

  var string =arr.join("")

  var position={

  }

  for(var i=0; i<string.length; i++){

    if(string[i] in position){

      position[string[i]].push(i);


    }else{

      position[string[i]]=[i];

    }

  }

  return position;
}



console.log(charPosition(process.argv.slice(2)))
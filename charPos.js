function countLetters(str){

  let output = {

  }

  str = str.replace(/ /g, "");

  for(let i = 0; i < str.length; i++){

    if(!output.hasOwnProperty(str[i])){
        output[str[i]] = 1;
    } else{
      output[str[i]] = output[str[i]] + 1;
    }
  }

return output;

}

console.log(countLetters("lighthouse in the house"));
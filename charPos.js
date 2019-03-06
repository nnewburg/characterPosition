function countLetters(str){

  let output = {

  }

  str = str.replace(/ /g, "");

  for(let i = 0; i < str.length; i++){

    if(!output.hasOwnProperty(str[i])){
        output[str[i]] = [];
        output[str[i]].push(i)
    } else{
      output[str[i]].push(i);
    }
  }

return output;

}

console.log(countLetters("lighthouse in the house"));
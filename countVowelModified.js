const isVowel = function(character){
  let vowels = "aeiouAEIOU";
  for(let vowelPosition=0; vowelPosition < vowels.length; vowelPosition++){
    if(vowels[vowelPosition]==character){
      return true;
    }
  }
  return false;
}

const countVowels = function(text){
  let numberOfVowels = 0;
  for( let letterPosition = 0; letterPosition<text.length; letterPosition++){
    if(isVowel(text[letterPosition])){
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
const main = function(){
  let text = process.argv[2];
  let numberOfVowels = countVowels(text);
  console.log(numberOfVowels);
}
main();

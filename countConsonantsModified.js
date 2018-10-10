const isConsonant=function(character) {
  let lowerConsonants = "bcdfghjklmnpqrstvwxyz";
  let upperConsonants = "BCDFGHJKLMNPQRSTVWXYZ";
  let consonants = lowerConsonants + upperConsonants;
  for( let consonantPos =0; consonantPos < consonants.length; consonantPos++){
    if(consonants[consonantPos]==character){
      return true;
    }
  }
  return false;
}

const countConsonant=function(text){
  let numberOfConsonants=0;
  for( let letterPosition =0; letterPosition < text.length; letterPosition++){
    if(isConsonant(text[letterPosition])){
      numberOfConsonants++;
    }
  }
  return numberOfConsonants;
}
const main = function(){
  let text = process.argv[2];
  console.log(countConsonant(text));
}
main();

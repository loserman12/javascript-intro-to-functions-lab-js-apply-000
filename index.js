function shout(string) {
  string.toUpperCase();
  return string
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout (string) {
   return console.log(string.toUpperCase());
}

function logWhisper(string) {
   return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
  return "I can\'t hear you!";
} if (string.toUpperCase()=== string)
   return  "YES INDEED!";
  else{ (string === "I love you, Grandma.")
  return "I love you, too.";
}
}

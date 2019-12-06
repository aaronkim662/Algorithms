let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let chars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

function translator(str){
  str = str.toLowerCase(); // lowercase all letters
  let codex = {};
  let newStr = '';
  for(let i = 0; i < letters.length; i += 1) {
    codex[letters[i]] = chars[i]; // store letters
  }
  for(let i = 0;i<str.length;i += 1) {
    let position = str[i];
    let translate = codex[position];
    newStr += translate;
  }
  return newStr
}
console.log(translator('hello')) // returns #3110

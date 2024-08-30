let i = 0;
const typewriter = () => {

const text = 'Software Engineer | Back-End Engineer | Biomedical Engineer';
const speed = 100;
const title = ''
if (i < text.length){
   console.log(text[i])
  text[i];
  i++;

  setTimeout(typewriter, speed);
}
}
typewriter()

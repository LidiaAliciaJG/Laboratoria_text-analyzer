
const analyzer = {
  getWordCount: (txtinput) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //let wordsError = txtinput.replace(/ +/g," ").replace(/^ /,"").replace(/ $/,"");
    const wordsError = txtinput.replace(/ +/g," ").trim();
    let words = wordsError.split(' ').length;
    if (wordsError==="") {
      words=0;
    }
    return words;
  },
  getCharacterCount: (txtinput) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const chars = txtinput.split('').length;
    return chars;
  },
  getCharacterCountExcludingSpaces: (txtinput) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charsNS = txtinput.replace(/ /g,"").replace(/[.,:;\-_?¡¿!"'()[\]{}«»]/g,""); // "/regex/global search" sustituye todos los patrones expresados dentro de / /
    return charsNS.length;
  },
  getAverageWordLength: (txtinput) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = txtinput.replace(/ +/g," ").trim();
    const savewords = words.split(' ');
    let wordslength = 0;
    let sum=0;
    for(let i = 0; i < savewords.length; i++) {
      wordslength= savewords[i].length;
      sum += Number(wordslength);
    }
    const promedio=sum/Number(savewords.length);
    //return Number(promedio.toFixed(2));
    return Math.round(promedio*100)/100;
  },
  getNumberCount: (txtinput) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const savenumber=txtinput.match(/[0-9]+/g) || []; //corrige error de consola por querer obtener longitud de un valor null, su valor es el pedido o un array cero
    //const savenumber=txtinput.match(/\d+(\.\d+)?/g) || [];
    //console.log(txtinput.match(/\d+(\.\d+)?/g)); // \d-> digit [0-9] 
    //const count=savenumber.length;
    //return count;
    const wordsError = txtinput.replace(/ +/g," ").trim();
    const words = wordsError.split(' ');
    const regex = /[a-zA-z]/;
    let count =0;
    for(let i = 0; i < words.length; i++) {
      const findnum=words[i].search(regex);
      if (findnum===-1) {
        count += 1;
      }
    }
    return count;
  },
  getNumberSum: (txtinput) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //const savenumber=txtinput.match(/\d+(\.\d+)?/g) || [];
    //let sum=0;
    //for(let i = 0; i < savenumber.length; i++) {
    //  sum += Number(savenumber[i]);
    //}
    const wordsError = txtinput.replace(/ +/g," ").trim();
    const words = wordsError.split(' ');
    const regex = /[a-zA-z]/;
    let sum=0
    for(let i = 0; i < words.length; i++) {
      const findnum=words[i].search(regex);
      if (findnum===-1) {
        sum+=parseFloat(words[i]);
      }
    }
    return Math.round(sum*100)/100;
  },
};

export default analyzer;

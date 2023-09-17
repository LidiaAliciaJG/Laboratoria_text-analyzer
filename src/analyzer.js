import { input } from "./index.js";

const analyzer = {
  getWordCount: (txtinput) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //let wordsError = txtinput.replace(/ +/g," ").replace(/^ /,"").replace(/ $/,"");
    let wordsError = txtinput.replace(/ +/g," ").trim();
    let words = wordsError.split(' ').length;
    if (wordsError=="") {
      words=0;
    }
    return words;
  },
  getCharacterCount: (txtinput) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let chars = txtinput.split('').length;
    return chars;
  },
  getCharacterCountExcludingSpaces: (txtinput) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let charsNS = txtinput.replace(/ /g,"").length; // "/regex/global search" sustituye todos los patrones expresados dentro de / /
    return charsNS;
  },
  getAverageWordLength: (txtinput) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let words = txtinput.replace(/ +/g," ").trim();
    let savewords = words.split(' ');
    let wordslength = 0;
    let sum=0;
    for(let i = 0; i < savewords.length; i++)
     {
         wordslength= savewords[i].length;
         sum += Number(wordslength);
     }
    let promedio=sum/Number(savewords.length);
    return promedio;
  },
  getNumberCount: (txtinput) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let savenumber=txtinput.match(/[0-9]/g) || []; //corrige error de consola por querer obtener longitud de un valor null, su valor es el pedido o un array cero
    let count=savenumber.length
    return count;
  },
  getNumberSum: (txtinput) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let savenumber=txtinput.match(/[0-9]/g) || [];
    let sum=0;
    for(let i = 0; i < savenumber.length; i++)
     {
         sum += Number(savenumber[i]);
     }
     return sum;
  },
};

export default analyzer;

import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const btn= document.getElementById("reset-button");
btn.addEventListener("click", function () {
  txt.value = "";
  palabras.innerHTML = "Cantidad de palabras: 0";
  caracteres.innerHTML = "Cantidad de carácteres: 0";
  caracteresNS.innerHTML = "Cantidad de solo carácteres: 0";
  numeros.innerHTML = "Cantidad de números: 0";
  suma.innerHTML = "Suma de los números: 0";
  promedio.innerHTML = "Longitud promedio de las palabras: 0";
});

const palabras= document.querySelector("li[data-testid='word-count']");
const caracteres= document.querySelector("li[data-testid='character-count']");
const caracteresNS= document.querySelector("li[data-testid='character-no-spaces-count']");
const numeros= document.querySelector("li[data-testid='number-count']");
const suma= document.querySelector("li[data-testid='number-sum']");
const promedio= document.querySelector("li[data-testid='word-length-average']");
const txt= document.querySelector("textarea");

txt.addEventListener("input", function () {
  const txtinput = txt.value;
  palabras.innerHTML = "Cantidad de palabras: "+analyzer.getWordCount(txtinput);
  caracteres.innerHTML = "Cantidad de carácteres: "+analyzer.getCharacterCount(txtinput);
  caracteresNS.innerHTML = "Cantidad de solo carácteres: "+analyzer.getCharacterCountExcludingSpaces(txtinput);
  numeros.innerHTML = "Cantidad de números: "+analyzer.getNumberCount(txtinput);
  suma.innerHTML = "Suma de los números: "+analyzer.getNumberSum(txtinput);
  promedio.innerHTML = "Longitud promedio de las palabras: "+analyzer.getAverageWordLength(txtinput);
});



//GetElementByName obtiene una lista -> se crea error si solo se pide su valor, se necesita matriz
//const btn= document.getElementById("btn");
//const respuesta= document.getElementById("demo");
//const text= document.getElementsByName("user-input"); 
//btn.addEventListener("click", function () {
//    for(let i = 0; i < text.length; i++)
//     {
//         respuesta.innerHTML = text[i].value;
//         console.log(text[i].value);
//     }
//});

//QuerySelector llama al objeto u objetos del tipo textarea, no especificos
//const btn= document.getElementById("btn");
//const demo= document.getElementById("demo");
//const txt= document.querySelector("textarea");
//btn.addEventListener("click", function () {
//         demo.innerHTML = txt.value;
//         console.log(txt.value);
//});

//observación: GetElementsByName no reconoce eventos de input
//let txt= document.querySelector("textarea");
//let respuesta= document.querySelector("li.words");
//txt.addEventListener("input", function () {
//        let txtinput = txt.value;
//         console.log(txtinput);
//         const words = txtinput.split(' ');
//         respuesta.innerHTML = "Palabras: "+words.length;
//});


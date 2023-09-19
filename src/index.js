import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const btn= document.getElementById("reset-button");
btn.addEventListener("click", function () {
  txt.value = "";
  palabras.innerHTML = "Palabras: 0";
  caracteres.innerHTML = "Carácteres: 0";
  caracteresNS.innerHTML = "Solo carácteres: 0";
  numeros.innerHTML = "Números: 0";
  suma.innerHTML = "Suma de números: 0";
  promedio.innerHTML = "Longitud promedio: 0";
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
  palabras.innerHTML = "Palabras: "+analyzer.getWordCount(txtinput);
  caracteres.innerHTML = "Carácteres: "+analyzer.getCharacterCount(txtinput);
  caracteresNS.innerHTML = "Solo carácteres: "+analyzer.getCharacterCountExcludingSpaces(txtinput);
  numeros.innerHTML = "Números: "+analyzer.getNumberCount(txtinput);
  suma.innerHTML = "Suma de números: "+analyzer.getNumberSum(txtinput);
  promedio.innerHTML = "Longitud promedio: "+analyzer.getAverageWordLength(txtinput);
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


import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const btn= document.getElementById("reset-button");
btn.addEventListener("click", function () {
         txt.value = "";
         respuesta.innerHTML = "Palabras: 0";
});

let respuesta= document.querySelector("li.words");
let txt= document.querySelector("textarea");
const input=txt.addEventListener("input", function () {
    let txtinput = txt.value;
        console.log(txtinput);
        respuesta.innerHTML = "Palabras: "+analyzer.getWordCount(txtinput);
});

export { input };

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


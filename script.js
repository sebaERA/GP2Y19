
import {app} from './firebaseinit.js';
// Initialize Firebase

var starCountRef = app.database().ref('Lectura');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val()
  console.log(`El valor1 ha cambiado a ${data}`)
  var parrafo2=document.getElementById("Densidad"); //al descomentar este me da error al ejecutar node js
  parrafo2.innerHTML=`${data} mg/m3`; //al descomentar este me da error al ejecutar node js
});

var starCountRef2 = app.database().ref('LecturaPPM');
starCountRef2.on('value', (snapshot) => {
  const data = snapshot.val()
  console.log(`El valor1 ha cambiado a ${data}`)
  var parrafo2=document.getElementById("PPM"); //al descomentar este me da error al ejecutar node js
  parrafo2.innerHTML=`${data} ppm`; //al descomentar este me da error al ejecutar node js

  mostrarCalidadDelAire(data);

});

function mostrarCalidadDelAire(ppmValue) {
  var calidadAireParrafo = document.getElementById("CalidadAire");
  if (calidadAireParrafo) {
    var calidadAire = obtenerCalidadDelAire(ppmValue);
    calidadAireParrafo.innerHTML = `Calidad del aire: ${calidadAire}`;
  }
}

function obtenerCalidadDelAire(ppmValue) {
  if (ppmValue >= 0 && ppmValue <= 75000) {
    return "Excelente";
  } else if (ppmValue > 75000 && ppmValue <= 150000) {
    return "Muy buena";
  } else if (ppmValue > 150000 && ppmValue <= 300000) {
    return "Buena";
  } else if (ppmValue > 300000 && ppmValue <= 1050000) {
    return "Aceptable";
  } else if (ppmValue > 1050000 && ppmValue <= 3000000) {
    return "Pobre";
  } else if (ppmValue > 3000000) {
    return "Muy pobre";
  } else {
    return "Desconocida";
  }
}
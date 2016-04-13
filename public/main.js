$(document).ready(function () {
  // If the browser supports localStorage and we have some stored data
  if (window.localStorage && localStorage.original) {
    console.log(localStorage.original);
    original.value = localStorage.original;
  }
});


function tabla(){
  
  var original = document.getElementById("original").value;
   if (window.localStorage)
      localStorage.original = original; //almacena los datos en localstorage
     
    var r = calculate(original);
    var template = fillTable.innerHTML;
    finaltable.innerHTML = _.template(template, {items: r});
}

//http://www.nodenica.com/training/desplegar-aplicaciones-nodejs-en-heroku
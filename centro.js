var gostei1 = document.querySelector("#like1");
var cont_gostei1 = document.querySelector("#contagem_like1");
var n1 = 0;

gostei1.addEventListener("click", function(event){
    event.preventDefault;
    n1 = n1 + 1;
    cont_gostei1.textContent = n1;


});

var comp1 = document.querySelector("#comp1");
var cont_comp1 = document.querySelector("#cont_comp1");
var n2 = 0;

comp1.addEventListener("click", function(event){
    event.preventDefault;
    n2 = n2 + 1;
    cont_comp1.textContent = n2;


});
var gostei2 = document.querySelector("#like2");
var cont_gostei2 = document.querySelector("#contagem_like2");
var n3 = 0;

gostei2.addEventListener("click", function(event){
    event.preventDefault;
    n3 = n3 + 1;
    cont_gostei2.textContent = n3;


});

var comp2 = document.querySelector("#comp2");
var cont_comp2 = document.querySelector("#cont_comp2");
var n4 = 0;

comp2.addEventListener("click", function(event){
    event.preventDefault;
    n4 = n4 + 1;
    cont_comp2.textContent = n4;


});
var form = document.querySelector("#form");
function myFunction() {
  var x = document.getElementById("caixadetext").value;
  var novocoment = document.createElement("fieldset");
console.log(x);
novocoment.innerHTML = "<b>Você: </b>" + x;
form.appendChild(novocoment);
}
var form1 = document.querySelector("#form1");
function myFunction1() {
  var y = document.getElementById("caixadetext1").value;
  var novocoment1 = document.createElement("fieldset");
console.log(y);
novocoment1.innerHTML = "<b>Você: </b>" + y;
form1.appendChild(novocoment1);
}

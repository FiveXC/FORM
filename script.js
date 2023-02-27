/*||*/
let inputs = document.querySelectorAll(".input")
let span = document.querySelectorAll(".span")
let areaInput = document.querySelectorAll(".areaInputs")
let btn = document.querySelector(".btn")
let preenchaSpan = document.querySelector(".preenchaSpan")
let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

btn.addEventListener("click", (event)=>{
 event.preventDefault();

if(!inputs[0].value || !inputs[1].value || !inputs[2].value || !inputs[3].value){
    valiUser()
    valiEmail()
    valiSenha()
    areaInput[3].style.border = "1px solid  rgb(164, 23, 177)"
}
 else if(!inputs[0].value || inputs[0].value.length < 4 ){
    erro(0)
}
else if(!inputs[1].value || !emailRegex.test(inputs[1].value)){
    erro(1)
}
else if(!inputs[2].value || inputs[2].value.length < 8){
    erro(2)
}
else if(!inputs[3].value || inputs[3].value !== inputs[2].value){
    erro(3)
}
else{
    salvando()
}
})


let pegandoChave = JSON.parse(localStorage.getItem("chave")) || []
function salvando(){

let dados = {
nmrInd: pegandoChave.length +1,
Username: inputs[0].value,
Email: inputs[1].value,
Senha: inputs[2].value,
}

let encontrado = false;

for (let i = 0; i < pegandoChave.length; i++) {
 if (pegandoChave[i].Email === inputs[1].value) {
   alert("Email já resgistrado")
   encontrado = true;
 }
}

if (!encontrado) {
pegandoChave.push(dados)
localStorage.setItem("chave", JSON.stringify(pegandoChave))
location.href = "login/index2.html"
}

}

function valiUser(){
if(inputs[0].value.length < 4){
    erro(0)
}
  else{
    resolvido(0)
  }
}
function valiEmail(){
if(!emailRegex.test(inputs[1].value)){
    erro(1)  
}else{
    resolvido(1)     
}
}
function valiSenha(){
if(inputs[2].value.length < 8){
    erro(2) 
}
else{
    resolvido(2) 
}
}
function valiSenhaIndentica(){
if(inputs[3].value !== inputs[2].value){
 erro(3) 
}
else{
 resolvido(3) 
}
}

function erro(index){
span[index].style.display = "block"
areaInput[index].style.border = "1px solid  rgb(164, 23, 177)"
}

function resolvido(index){
span[index].style.display = ""
areaInput[index].style.border = ""
}
    

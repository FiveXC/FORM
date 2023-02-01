let checkboxcor= document.querySelector(".checkboxcor")
let bolinha = document.querySelector(".bolinha")
let span = document.querySelectorAll(".span")
let required = document.querySelectorAll(".required")
let btnEnviar = document.querySelector(".btnEnviar")
let fieldeset = document.querySelectorAll(".fieldset")
let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let olhoaberto1 = document.querySelector(".olhoaberto1")
let olhoaberto2 = document.querySelector(".olhoaberto2")


let corSite = localStorage.getItem("ChaveCor")

checkboxcor.addEventListener("click", ()=>{

if(checkboxcor.checked){
 localStorage.setItem("ChaveCor", JSON.stringify(checkboxcor.checked))
 document.body.classList.add("dark")
 bolinha.classList.add("mover")
}
else{
 localStorage.setItem("ChaveCor", JSON.stringify(checkboxcor.checked))
 document.body.classList.remove("dark")
 bolinha.classList.remove("mover")
}
})

window.onload = function(){
if(corSite === "true"){
  checkboxcor.checked = true
  document.body.classList.add("dark")
  bolinha.classList.add("mover")
}
else{
 checkboxcor.checked = false
 document.body.classList.remove("dark")
 bolinha.classList.remove("mover")
}
   
}


function valiNome(){
    if(required[0].value.length < 4 ){
        erro(0)
    }else{
        resolvidos(0)
    }
}
function valiEmail(){
    if(!emailRegex.test(required[1].value)){
         erro(1)  
    }else{
         resolvidos(1)     
    }
}

function valiSenha(){
    if(required[2].value.length < 8){
        erro(2) 
    }
    else{
        resolvidos(2) 
    }
}
function valiSenhaIndentica(){
    if(required[3].value !== required[2].value){
        erro(3) 
    }
    else{
        resolvidos(3) 
    }
}
function erro(index){
 span[index].style.display = "block"
 fieldeset[index].style.color = "red"
}
function resolvidos(index){
    span[index].style.display = "none"
    fieldeset[index].style.color = ""
}

btnEnviar.addEventListener("click", todosCamposVazios)

function todosCamposVazios(event){
 event.preventDefault()

 if(!required[0].value && !required[1].value && !required[2].value && !required[3].value ){
    valiNome()
    valiEmail()
    valiSenha()
}
else if(!required[0].value || required[0].value.length < 4){
    valiNome()
}
else if(!required[1].value || !emailRegex.test(required[1].value)){
    valiEmail()
}
else if(!required[2].value || required[2].value.length <8){
    valiSenha()
}
else if(required[3].value !== required[2].value){
    valiSenhaIndentica()
}
else{
    salvar()
}
}

let pegandoChave = JSON.parse(localStorage.getItem("Chave")) || []

function salvar(){

let dados = {
    User: required[0].value,
    Email: required[1].value,
    Senha: required[2].value
}

pegandoChave.push(dados)
localStorage.setItem("Chave", JSON.stringify(pegandoChave))
location.href = "login/index2.html"
}




olhoaberto1.addEventListener("click", ()=>{
if(required[2].type == "password"){
required[2].type = "text"
olhoaberto1.style.color = "#634591"
}
else{
required[2].type = "password"
olhoaberto1.style.color = "#A970FF"
}
})
    
olhoaberto2.addEventListener("click", ()=>{
if(required[3].type == "password"){
required[3].type = "text"
olhoaberto2.style.color = "#634591"
}
else{
required[3].type = "password"
olhoaberto2.style.color = "#A970FF"
}
})
    
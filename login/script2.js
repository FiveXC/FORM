let UserLogin = document.querySelector(".UserLogin")
let SenhaLogin = document.querySelector(".SenhaLogin")
let btnLogin = document.querySelector(".btnLogin")


let pegandoChave = JSON.parse(localStorage.getItem("chave")) 

btnLogin.addEventListener("click", vendo_se_tem_no_localstorage)

function vendo_se_tem_no_localstorage(e){
e.preventDefault()

pegandoChave.forEach(function(infos){

if(UserLogin.value  != infos.Username || SenhaLogin.value  != infos.Senha){
}
else if(UserLogin.value  === infos.Username && SenhaLogin.value === infos.Senha){
 location.href = "https://github.com/FiveXC"
}
})
}

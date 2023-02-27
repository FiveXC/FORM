let UserLogin = document.querySelector(".UserLogin")
let SenhaLogin = document.querySelector(".SenhaLogin")
let btnLogin = document.querySelector(".btnLogin")


let pegandoChave = JSON.parse(localStorage.getItem("chave")) 

btnLogin.addEventListener("click", vendo_se_tem_no_localstorage)

function vendo_se_tem_no_localstorage(e){
e.preventDefault()
let encontrado = false;

for (let i = 0; i < pegandoChave.length; i++) {
  if (pegandoChave[i].Username === UserLogin.value && pegandoChave[i].Senha === SenhaLogin.value) {
    location.href = "https://github.com/FiveXC?tab=repositories"
    encontrado = true;
  }
}

if (!encontrado) {
    alert("Seu Username ou senha estão erradas.")
  } 


}

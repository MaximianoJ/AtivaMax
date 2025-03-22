const entrarMenu = document.querySelector('#entrar-menu');
const sairMenu = document.querySelector('#sair-menu');
const menuMobile = document.querySelector('.itens-menu-mobile');

entrarMenu.addEventListener('click', () => {
    menuMobile.classList.add('show-menu');
});

sairMenu.addEventListener('click', () => {
    menuMobile.classList.remove('show-menu');
});

const planosMob = document.querySelector('#planosMob').addEventListener('click', () => {
    menuMobile.classList.remove('show-menu');
});
const atividadesMob = document.querySelector('#atividadesMob').addEventListener('click', () => {
    menuMobile.classList.remove('show-menu');
});

const passArea = document.querySelector('#passwordArea');
const btnPass = document.querySelector('#btnSenha');

btnPass.addEventListener('click', () => {
   if (passArea.type === 'password') {
    passArea.setAttribute('type', 'text');
    btnPass.classList.replace('fa-eye', 'fa-eye-slash')
   } else {
    passArea.setAttribute('type', 'password');
    btnPass.classList.replace('fa-eye-slash', 'fa-eye');
   }
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const loginButton = document.querySelector("button[type='submit']");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        if (!emailInput.value || !passwordInput.value) {
          return;
        }
  
        event.preventDefault();
        
    
        Swal.fire({
          icon: "error",
          title: "Erro no login",
          text: "Usuário ou senha inválidos. É necessário se matricular.",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
      });
    }
  });
  
  
  


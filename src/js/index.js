//Código Original
/*
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');
const btnEnviar = document.getElementById('btn-enviar');
const aviso = document.querySelectorAll('.aviso');

function verificandoSeEstaVazio(input, i){
    let temTexto = input.value; 
    let avisoP = aviso[i];
    if(temTexto){
        input.style.borderColor = '#3ccc87';
        input.style.marginBottom = '15px';
        avisoP.innerHTML = " ";
    }else{
        input.style.borderColor = '#F52E2E';
        input.style.marginBottom = '0px';
        avisoP.innerHTML = "campo obrigatório";
        avisoP.style.color = '#F52E2E';
    };
};

btnEnviar.addEventListener("click", () => {
    verificandoSeEstaVazio(nome, 0);
    verificandoSeEstaVazio(email, 1);
    verificandoSeEstaVazio(telefone, 2);
    verificandoSeEstaVazio(mensagem, 3);
});
*/

//Código Refatorado
const inputs = [
    document.getElementById('nome'),
    document.getElementById('email'),
    document.getElementById('telefone'),
    document.getElementById('mensagem')
];
const avisos = document.querySelectorAll('.aviso');
function verificandoSeEstaVazio(input, i){
    let temTexto = input.value;
    let avisoP = avisos[i];
    if(temTexto){
        input.style.borderColor = '#3ccc87';
        input.style.marginBottom = '15px';
        avisoP.innerHTML = " ";
    }else{
        input.style.borderColor = '#F52E2E';
        input.style.marginBottom = '0px';
        avisoP.innerHTML = "campo obrigatório";
        avisoP.style.color = '#F52E2E';
    };
};
const btnEnviar = document.getElementById('btn-enviar');
btnEnviar.addEventListener("click", () => {
    inputs.forEach((input, i) => {
        verificandoSeEstaVazio(input, i);
    });
});
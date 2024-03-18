let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 1;
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você acertou o numero secreto (${numeroSecreto}) com ${numeroDeTentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'O numero Secreto é menor');
         } else {
             exibirTextoNaTela('h1', 'O número Secreto é maior');
        }
        numeroDeTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeros.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeros.push(numeroSorteado);
        console.log(listaDeNumeros);
        return numeroSorteado;
}
}

function limparCampo(){
     chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    numeroDeTentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
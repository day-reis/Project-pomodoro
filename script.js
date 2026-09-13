const timer = document.getElementById('timer');
const btnIniciar = document.getElementById('iniciar');
const btnPausar = document.getElementById('pausar');
const btnReiniciar = document.getElementById('reiniciar');
const btnFoco = document.getElementById('foco');
const btnEstudo = document.getElementById('estudo');
const btnTrabalho = document.getElementById('trabalho');
const btnLeitura = document.getElementById('leitura');
const sequenciaElement = document.getElementById("sequencia");
const tempoFocadoElement = document.getElementById("tempo-focado");
const hoje = new Date().toLocaleDateString("pt-BR");
const dataSalva = localStorage.getItem("dataPomodoro");
const modoBtn = document.getElementById('modo-btn');
const timerLabel = document.getElementById('timer-label');

if (dataSalva !== hoje) {
    localStorage.setItem("dataPomodoro", hoje);
    localStorage.setItem("sequencia", 0);
    localStorage.setItem("tempoFocadoHoje", 0);
}
// function trocar bg com temas 

function trocarModo( tema, minutos, nome){
    clearInterval(intervalo);
    rodando = false;
    tempoInicial = minutos * 60;
    tempoRestante = tempoInicial;
    document.body.className = tema;
    timerLabel.textContent = nome.toUpperCase();
    modoBtn.textContent = `${nome} ${minutos} min`;
    atualizarTimer();
}
// mostrar sequencias e tempo focado 

let sequencia = Number(localStorage.getItem("sequencia")) || 0;
let tempoFocadoHoje = Number(localStorage.getItem("tempoFocadoHoje")) || 0;

// function para atualizar a tela

function atualizarEstatisticas(){
   sequenciaElement.textContent = sequencia;
    
    const horas = Math.floor(tempoFocadoHoje / 60);
    const minutos = tempoFocadoHoje % 60;

    if(horas > 0){
        tempoFocadoElement.textContent =` ${horas}hrs ${minutos}min`;
    }else{
        tempoFocadoElement.textContent =` ${minutos}min`;   
    }
}
// tempo inicial

let tempoInicial = 25 * 60;
let tempoRestante = tempoInicial;

// Mostrar tempo

function atualizarTimer() {

    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    timer.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

// controle do timer

let intervalo;
let rodando = false;


// função botão de start

function iniciarTimer() {
    if (rodando) {
        return;
    }

    rodando = true;
    intervalo = setInterval(() => {

        if (tempoRestante > 0) {
            tempoRestante--;
            atualizarTimer();
        } else {
            clearInterval(intervalo);
            rodando = false;
            concluirSessao();
        }
    }, 1000);
}
// fução para concluir sessões
function concluirSessao(){
    sequencia ++;

    const minutosDaSessao = tempoInicial / 60;
    tempoFocadoHoje += minutosDaSessao;
    localStorage.setItem("sequencia", sequencia);
    localStorage.setItem("tempoFocadoHoje", tempoFocadoHoje);
    atualizarEstatisticas();
    console.log(" Sessão comcluida! ");
}

// função de pausar

function pausarTimer() {
    clearInterval(intervalo);
    rodando = false;
}

// função de reiniciar

function reiniciarTimer() {
    clearInterval(intervalo);
    rodando = false;
    tempoRestante = tempoInicial;
    atualizarTimer();
}

// eventos de clique

btnIniciar.addEventListener("click", iniciarTimer);
btnPausar.addEventListener("click", pausarTimer);
btnReiniciar.addEventListener("click", reiniciarTimer);


// Troca de fundo 

btnFoco.addEventListener("click", () => {
    trocarModo("tema-foco", 25, "Foco");
});

btnEstudo.addEventListener("click", () => {
    trocarModo("tema-estudo", 50, "Estudo");
});

btnTrabalho.addEventListener("click", () => {
    trocarModo("tema-trabalho", 45, "Trabalho");
});

btnLeitura.addEventListener("click", () => {
    trocarModo("tema-leitura", 30, "Leitura");
});
// mostrar 25:00 ao carregar a página

atualizarTimer();
atualizarEstatisticas();
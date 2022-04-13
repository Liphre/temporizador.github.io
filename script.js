var buttonStart
var buttonPause
var buttonReset
var divTempo
var tempo = 0
var timerId
var mark // novo para o marcador reservado
var timerlista // puxa a lista dos marcadores
var index // o indentificador da opcao
var limparmarcadores // limpa a caixa de marcadores
var ultimomarcador // tira da lista o ultimo marcador nela.
//Inicia a aplicação
init()

function init(){
  buttonStart = document.getElementById("start")
  buttonStart.onclick = start
  
  buttonPause = document.getElementById("pause")
  buttonPause.onclick = pause
  buttonPause.disabled = true
  
  buttonReset = document.getElementById("reset")
  buttonReset.onclick = reset
  buttonReset.disabled = true
  
  mark = document.getElementById("mark")
  mark.onclick = markadd
  
  timerlista = document.getElementById("timerlista")
  
  limparmarcadores = document.getElementById("clearall")
  limparmarcadores.onclick = marklimpar
  
  ultimomarcador = document.getElementById("removelast")
  ultimomarcador.onclick = markremoverultimo
  
  divTempo = document.getElementById("tempo")  
}

function update(){
  tempo = tempo + 0.100
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start(){
  timerId = setInterval(update, 100)
  buttonStart.disabled = true
  buttonPause.disabled = false
  buttonReset.disabled = false
}
function pause(){
  clearInterval(timerId)
  buttonStart.disabled = false
  buttonPause.disabled = true
}
function reset(){
  clearInterval(timerId)
  tempo = 0
  divTempo.innerHTML = tempo.toFixed(1) + "s"
  buttonStart.disabled = false
  buttonPause.disabled = true
  buttonReset.disabled = false
}

//Função do marcador
function markadd(){
// pega o tempo atual;
index++; // cumulador
var novoMarcador = document.createElement("option");
novoMarcador.value = index;
novoMarcador.text = "Marked:" + tempo.toFixed(1) + "!"; //toFixed pega apenas o numero de casa decimais declarada
timerlista.add(novoMarcador);
}

//Remove todos os marcadores
function marklimpar(){
timerlista.options.length = 0;
}

// remove o ultimo index do marcador
function markremoverultimo(){
timerlista.options.length = timerlista.options.length - 1;
}
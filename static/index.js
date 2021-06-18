const inimigos = document.getElementsByClassName('inimigo');
const armas = document.getElementsByClassName('arma');

let inimigoSelecionado;
let armaSelecionada;
let nomeInimigo;

for(const inimigo of inimigos){
  inimigo.addEventListener('click', function(){
    if (document.getElementsByClassName('inimigo-selecionado').length < 1){
      this.classList.add('inimigo-selecionado');
      inimigoSelecionado = this.getAttribute('data-vida');
      nomeInimigo = this.getAttribute('data-nome');
    } else {
      this.classList.remove('inimigo-selecionado');
      inimigoSelecionado = ''
      nomeInimigo = ''
    }
  })
}

for (const arma of armas){
  arma.addEventListener('click', function(){
    if(document.getElementsByClassName('arma-selecionada').length < 1){
      this.classList.add('arma-selecionada');
      armaSelecionada = this.getAttribute('data-dano');
    } else{
      this.classList.remove('arma-selecionada');
      armaSelecionada = ''
    }
  })
}

function jogar(){ 


  if(inimigoSelecionado == 0 || armaSelecionada == 0){
    window.alert('Você precisa selecionar um inimigo e uma arma!!!');
  } else {
    if(armaSelecionada >= inimigoSelecionado){
        window.alert(`Dano: ${armaSelecionada}! Você matou ${nomeInimigo}!!!`);
    } else {
        window.alert(`Dano: ${armaSelecionada}... ${nomeInimigo} sobreviveu ao ataque...`);
    }
}
}
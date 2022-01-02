var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogadorSelecionado');
var vencedorSelecionado = document.getElementById('vencedorSelecionado');
var square = document.getElementsByClassName('square');

mudarJogador('❌');

function escolherSquare(id) {
    if (vencedor !== null) {
        return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = jogador;
    square.style.color = '#000';

    if (jogador === '❌') {
        jogador = '⭕';
    } else {
        jogador = '❌';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if (checaSequencia(square1, square2, square3)) {
        mudaCorSquare(square1, square2, square3);
        mudarVencedor(square1);
    }

    if (checaSequencia(square4, square5, square6)) {
        mudaCorSquare(square4, square5, square6);
        mudarVencedor(square4);
        return;
    }
    if (checaSequencia(square7, square8, square9)) {
        mudaCorSquare(square7, square8, square9);
        mudarVencedor(square7);
        return;
    }

    if (checaSequencia(square1, square4, square7)) {
        mudaCorSquare(square1, square4, square7);
        mudarVencedor(square1);
        return;
    }
    if (checaSequencia(square2, square5, square8)) {
        mudaCorSquare(square2, square5, square8);
        mudarVencedor(square2);
        return;
    }
    if (checaSequencia(square3, square6, square9)) {
        mudaCorSquare(square3, square6, square9);
        mudarVencedor(square3);
        return;
    }
    if (checaSequencia(square1, square5, square9)) {
        mudaCorSquare(square1, square5, square9);
        mudarVencedor(square1);
        return;
    }
    if (checaSequencia(square3, square5, square7)) {
        mudaCorSquare(square3, square5, square7);
        mudarVencedor(square3);
    }
}

function mudarVencedor(square) {
    vencedor = square.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorSquare(square1, square2, square3) {
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
}

function checaSequencia(square1, square2, square3) {
    var eigual = false;

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        eigual = true;
    }
    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    mudarJogador('❌');

}
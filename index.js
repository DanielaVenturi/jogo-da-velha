
let jogador = "X";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

let vitoria_X = 0;
let vitoria_O = 0;

let placar = document.getElementById("placar")

function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();

        
    }

}
function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa01.innerHTML === casa03.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        vitoria(casa01.innerHTML);
    }
    else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        alert(`Temos uma ganhador: ${casa04.innerHTML}`)
        vitoria(casa04.innerHTML)
    }
    else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa07.innerHTML}`)
        vitoria(casa07.innerHTML)
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        vitoria(casa01.innerHTML)

    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        vitoria(casa03.innerHTML)

    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa01.innerHTML === casa07.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        vitoria(casa01.innerHTML)

    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa02.innerHTML === casa08.innerHTML) {
        alert(`Temos uma ganhador: ${casa02.innerHTML}`)
        vitoria(casa02.innerHTML)

    }
    else if (casa03.innerHTML != "" && casa06.innerHTML === casa03.innerHTML && casa06.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa03.innerHTML}`);
        vitoria(casa03.innerHTML)

    }
}
function vitoria(vencedor) {
    if (vencedor === "X")
        vitoria_X = vitoria_X + 1;
    else
        vitoria_O = vitoria_O + 1;

    placar.innerHTML = `<p>PLACAR</p> <p>X: ${vitoria_X}</p> <p>O: ${vitoria_O}</p>`;

    
}
function iniciarJogo() {
    let casa = document.getElementsByClassName(`casa`);
    casa[0].innerHTML = "";
    casa[1].innerHTML = "";
    casa[2].innerHTML = "";
    casa[3].innerHTML = "";
    casa[4].innerHTML = "";
    casa[5].innerHTML = "";
    casa[6].innerHTML = "";
    casa[7].innerHTML = "";
    casa[8].innerHTML = "";


    let quem_inicia = prompt("Voce quer começar com X ou O?").toUpperCase;
jogador = quem_inicia; 

}


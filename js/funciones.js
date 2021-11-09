var siguiente = false;
var jugar = false;


function cambiar(opcion) {
    switch (opcion) {
        case 1:
            document.getElementById('Menujuego').style.display = 'none';
            document.getElementById('nombrejugador').style.display = 'block';
            nextVista();
            console.log("Funciono");
            break;
        default:
            break;
    }
}

function ocultar() {
    document.getElementById("nombrejugador").style.display = 'block';
    document.getElementById("Menujuego").style.display = 'none';
    document.getElementById("selectnivel").style.display = 'none';
}

function nextVista() {
    //ejemplo
    document.getElementById("Jugar").addEventListener("click", Jugar);
}

function Jugar() {
    if (siguiente) {
        document.getElementById("nombrejugador").style.display = 'block';
        document.getElementById("Menujuego").style.display = 'none';
        siguiente = false;
        jugar = true;
    }
}
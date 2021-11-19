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

function close_window(){
    Swal.fire({
    title: 'Estas seguro de que deseas salir?',
    text: "No podras revertir los cambios!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Se terminara el juego!'
    }).then((result) => {
    if (result.isConfirmed) {
        windows.close();
    }
    })
}

var character;

function selectCharacter(char){
    character = char;
}

function get_send_data(){
    let name = document.getElementById('input_text').value;
    console.log(character)
    if (name.length >= 3 && (character ==1 || character ==2)) {
        const char = name + ','+character;
        localStorage.setItem('char',char);
        console.log(localStorage.getItem('char'));
        Swal.fire({
            icon: 'success',
            title: 'Personaje registrado satisfactoriamente!',
            showConfirmButton: false,
            timer: 3000
        })
        location.href='./mapa.html';
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese su nombre y seleccione su personaje!',
        })
    }
}

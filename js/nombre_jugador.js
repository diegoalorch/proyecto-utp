
var character;

function selectCharacter(char){
    character = char;
    if (char == 1) {
        Swal.fire({
            icon: 'success',
            imageUrl:'img/character/character_1.png',
            imageHeight: 200,
            title: 'Personaje Seleccionado',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        Swal.fire({
            icon: 'success',
            imageUrl:'img/character/character_2.png',
            imageHeight: 200,
            title: 'Personaje Seleccionado',
            showConfirmButton: false,
            timer: 1500
        })
    }
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
            showConfirmButton: true,
            showCancelButton:true,
            confirmButtonText:'Continuar',
        }).then((result)=>{
            if (result.isConfirmed){
                location.href='./mapa.html';
            }
        })
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese su nombre y seleccione su personaje!',
        })
    }
}

function Masculino_Femenino(){
    let valor = document.getElementById('MF');
    document.getElementById("text_fm").value = "Masculino";
    if(valor.checked == true ){
        console.log("Masculino")
        document.getElementById("text_fm").innerHTML = "Masculino";
    }else{
        document.getElementById("text_fm").innerHTML = "Femenino";
        console.log("Femenino")
    }
}
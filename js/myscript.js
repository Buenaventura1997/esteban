function banderas(){
    let banderas = document.getElementById("menu").value;
    if(banderas === "Guatemala"){
        document.getElementById("ejercicio1").style.display ="block";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";

    } else if (banderas === "India"){
        document.getElementById("ejercicio2").style.display ="block";
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";

    } else if (banderas === "Paises_Bajos"){
        document.getElementById("ejercicio3").style.display ="block";
        document.getElementById("ejercicio1","ejercicios2", "ejercicio4","ejercicio5").style.display ="none";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio4").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";

    } else if (banderas === "Suecia"){
        document.getElementById("ejercicio4").style.display ="block";
        document.getElementById("ejercicio1").style.display ="none";
        document.getElementById("ejercicio2").style.display ="none";
        document.getElementById("ejercicio3").style.display ="none";
        document.getElementById("ejercicio5").style.display ="none";

    } else if (banderas === "Suiza"){
            document.getElementById("ejercicio5").style.display ="block";
            document.getElementById("ejercicio2").style.display ="none";
            document.getElementById("ejercicio3").style.display ="none";
            document.getElementById("ejercicio4").style.display ="none";
            document.getElementById("ejercicio1").style.display ="none";

    } else {
        alert("Selecciona una opcion");
    }

}

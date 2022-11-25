
/*création de la fonction de vérification de compte*/
function Verifcompte(){

    /*récupération de la valeur de l'input compte*/
    const compteInput = document.getElementById("compte").value;

    console.log(compteInput);

    /*condition si num compte est composé de 16 chiffres*/
    if(compteInput.length === 16){
        return compteInput.value;
    }
}


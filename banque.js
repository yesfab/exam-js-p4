
/*création de la fonction de vérification de compte*/
function Verifcompte(){

    /*récupération de la valeur de l'input compte*/
    var compteInput = document.getElementById("compte").value;

    /*test valeur récupérée*/
    console.log(compteInput);
    alert(compteInput);

    /*condition si num compte est composé de 16 chiffres*/
    if(compteInput.length === 16){
        return compteInput.value;
    }
}

/*création de la fonction de vérification de la somme à déposer*/
function VerifSomme(){
    
}
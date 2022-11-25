
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
    /*récupération de la valeur de l'input somme*/
    var sommeInput = document.getElementById("somme").value;

    /*test valeur récupérée*/
    console.log(sommeInput);
    alert(sommeInput);

    /*condition si somme ets sup à 0*/
    if(sommeInput.value > 0){
        return sommeInput.value;
    }
}
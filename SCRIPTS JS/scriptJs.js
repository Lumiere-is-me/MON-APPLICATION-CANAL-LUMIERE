
let listeClients = JSON.parse(localStorage.getItem('mesClients')) || [];

const formClt = document.getElementById('formulaireClient');
const bodyTable = document.getElementById('body-table');

const champNumeroDecodeur = document.getElementById('numDecodeur');
const champNumeroTelephone = document.getElementById('numTelephone');
const champFirstNameClt = document.getElementById('nomClient');
const champLastNameClt = document.getElementById('prenomClient');
const champDateDebut = document.getElementById('dateDeDebut');
const champDateFin = document.getElementById('dateDeFin');
const champFormula = document.getElementById('formule');
const champJoursRestants = document.getElementById('nbreJoursRestants');
const champMessageAlerte =document.getElementById('alert-msg');

const boutonEnregistrer=document.getElementById('btn-save');



    /*if(!((Number.isInteger(numeroDecodeur))&& (numeroDecodeur>0)&&(String(Math.abs(numeroDecodeur)).length===14))){
        throw new Error("Entrer un numéro de décodeur valide");
    }if(!((Number.isInteger(numeroTelephone))&& (numeroTelephone>0)&&(String(Math.abs(numeroTelephone)).length===9))){
        throw new Error("numéro de téléphone invalide")

    }if((typeof(firstNameClt)!=='string')||(nameClt.trim()==="")){
        throw new Error("Entrer un nom valide");
    }if((typeof(lastNameClt)!=='string')||(lastNameClt.trim()==="")){
        throw new Error("Entrer un nom valide");
    }const dateDeDebutObject = new Date(dateDebut);
    if(Number.isNaN(dateDeDebutObject.getTime())){
        throw new Error("date invalide")
    }const dateDeFinObject = new Date(dateFin);
    if(Number.isNaN(dateDeFinObject.getTime())){
        throw new Error("date invalide")
    }*/
   boutonEnregistrer.addEventListener('click',function(){
    formClt.toggleAttribute('hidden')
   })


   function afficherClients(){
    bodyTable.innerHTML="";
   listeClients.forEach(client => {
    //création d'une nouvelle ligne dans le tableau auquel les données du formulaire vont venir s'ajouter
    const nouvelleLigne = document.createElement('tr');
    //cette nouvelle ligne sera constituée des cellules dans lesquelles chaque donnée va prendre place
    nouvelleLigne.innerHTML=`
    <td>${client.numeroDecodeur}</td>
    <td>${client.telephone}</td>
    <td>${client.nom}</td>
    <td>${client.prenom}</td>
    <td>${client.debut}</td>
    <td>${client.fin}</td>
    <td>${client.reste}</td>
    <td>${client.formule}</td>
    <td>${client.message}</td>`
    //ajout de la ligne créee dans le corps du tableau
    bodyTable.appendChild(nouvelleLigne);
    //on réinitialise le formulaire pour la prochaine saisie
    });
   }


   formClt.addEventListener('submit', function(event){
    event.preventDefault();//on empêche le rechargement automatique de la page
    //on récupère les valeurs qu'on va taper dans les champs définis en ce moment précis
    const numeroDecodeur = champNumeroDecodeur.value;
    const numeroTelephone = champNumeroTelephone.value;
    const firstNameClt = champFirstNameClt.value;
    const lastNameClt = champLastNameClt.value;
    const dateDebut = champDateDebut.value;
    const dateFin =champDateFin.value;
    const joursRestants = champJoursRestants.value;
    const formula = champFormula.value;
    const messageAlerte = champMessageAlerte.value;

    const nouveauClient = {decodeur:numeroDecodeur, telephone:numeroTelephone,nom: firstNameClt.trim(),prenom:lastNameClt.trim(),debut:dateDebut, fin:dateFin, reste:joursRestants,formule:formula,message:messageAlerte}
    listeClients.push(nouveauClient);
    //on sauvegarde le tableau mis à jour dans le localStorage(converti en texte)
    localStorage.setItem('mesClients', JSON.stringify(listeClients));
    afficherClients();
    formClt.reset();
}); 
afficherClients();

/*
//let boutonEnregistrer = document.getElementById('btn-enregistrer');

//EnregistrerNouveauClient();

//console.log(EnregistrerNouveauClient(tableauDesClients,23122133623500,676699640,"ANGO","Perette","Access", "10-10-2026",'bonjour'));
//console.log(EnregistrerNouveauClient(tableauDesClients,23122193623500,676659640,"ANGOb","Pereitte","Access", "10-06-2026",'bonjourr'));*/
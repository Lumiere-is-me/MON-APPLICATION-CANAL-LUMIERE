const tableauDesClients =[
    {numDecodeur:23800100200365, telephone:677852147,nomClient:"Miska", prenomClient:"Fanelle",formule:"Access",dateDeDebut:"01-10-2026",dateDeFin:"01-11-2026",nbreJoursRestants:0,messageAlerte:"REAbonnez-vous"}
];

// Ajouter un nouveau client
function EnregistrerNouveauClient(table,numDecodeur, telephone,nomClient, prenomClient,formule,dateDeDebut,dateDeFin,nbreJoursRestants,messageAlerte){
    if(!(Array.isArray(table))){
        throw new Error("enregistrer les clients dans un tableau");
    }if(!((Number.isInteger(numDecodeur))&& (numDecodeur>0)&&(String(Math.abs(numDecodeur)).length===14))){
        throw new Error("Entrer un numéro de décodeur valide");
    }if(!((Number.isInteger(telephone))&& (telephone>0)&&(String(Math.abs(telephone)).length===9))){
        throw new Error("numéro de téléphone invalide")

    }if((typeof(nomClient)!=='string')||(nomClient.trim()==="")){
        throw new Error("Entrer un nom valide");
    }if((typeof(prenomClient)!=='string')||(prenomClient.trim()==="")){
        throw new Error("Entrer un nom valide");
    }const dateDeDebutObject = new Date(dateDeDebut);
    if(Number.isNaN(dateDeDebutObject.getTime())){
        throw new Error("date invalide")
    }dateDeFin =dateDeDebut+30;
     nbreJoursRestants = dateDeFin-dateDeDebut;
    const nouveauClient = {numDecodeur:numDecodeur, telephone:telephone, nomClient:nomClient.trim(), prenomClient:prenomClient.trim(), formule:formule,dateDeDebut:dateDeDebut, dateDeFin:dateDeFin, nbreJoursRestants:nbreJoursRestants, messageAlerte:messageAlerte}
    table.push(nouveauClient);
    return table;
}

let boutonEnregistrer = document.getElementsByClassName('btn-enregistrer');
boutonEnregistrer.addEventListener("click",EnregistrerNouveauClient);
console.log(EnregistrerNouveauClient(tableauDesClients,23122133623500,676699640,"ANGO","Perette","Access", "10-10-2026",'bonjour'));

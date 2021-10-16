"use strict" ;

/**
 * Fonction qui...
 *
 * @example
 *
 * @param {}
 *
 * @return {}
 *
 */
function travailGroupe()
{
	let combinaisonOrdi = [];
	let couleurChoisie;
	let reponseUser = [];
	for (let compteur=0 ; compteur<4; compteur++)
	{
	combinaisonOrdi.push(Math.floor(Math.random() * 6))
		switch (true)
		{
			case (combinaisonOrdi[compteur] == 0) : combinaisonOrdi[compteur] = "orange";
								break;
			case (combinaisonOrdi[compteur] == 1) : combinaisonOrdi[compteur] = "bleu";
								break;
			case (combinaisonOrdi[compteur] == 2) : combinaisonOrdi[compteur] = "rouge";
								break;
			case (combinaisonOrdi[compteur] == 3) : combinaisonOrdi[compteur] = "vert";
								break;
			case (combinaisonOrdi[compteur] == 4) : combinaisonOrdi[compteur] = "jaune";
								break;
			case (combinaisonOrdi[compteur] == 5) : combinaisonOrdi[compteur] = "violet";
								break;
			default: console.log("RIP");

		}
	}
	for  (let emplacement=1; emplacement<5; emplacement++) 
	{
		couleurChoisie = prompt("Quel couleur voulez-vous mettre à l'emplacement  " + emplacement + " ?");
		
		if ((couleurChoisie == "orange") || (couleurChoisie == "bleu") || (couleurChoisie == "rouge") || (couleurChoisie == "vert") || (couleurChoisie == "jaune") || (couleurChoisie == "violet"))
		{
			reponseUser.push(couleurChoisie);
		}
		else 
		{
			console.log("Erreur, nous n’avons pas compris. Veuillez choisir une couleur parmi orange, bleu, rouge, vert, jaune et violet");
			emplacement -= 1;
		}
	}


console.log(reponseUser);
console.log(combinaisonOrdi);
}

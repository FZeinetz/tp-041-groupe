/* Description programme :

Pour le fonctionnement du programme : 
1) On génère une combinaison de 4 chiffres aléatoires (parmi 6 choix possibles) dans un array [combinaisonOrdi] 

2) On associe chaque chiffre de 0 à 5 à la valeur d'une couleur : bleu, rouge, jaune, vert, blanc, noir (avec un switch par exemple) => A cette étape, on a un array 
combinaisonOrdi avec 4 couleurs dedans. Ex [bleu, blanc, jaune, rouge] 

3) Avec une boucle qui vérifie si la valeur est EXACTEMENT correcte (par ex "bleu" et pas "BLEU" ou "Bleu"), on demande à l'utilisateur de rentrer 4 fois la valeur d'une couleur, parmi les 6 choix disponibles et on vient placer ces valeurs dans un nouvel array [reponseUser] 

4) Avec des conditions et une boucle on vient chercher chaque élément de reponseUser et reponseOrdi pour les comparer 

5) La console renvoie à l'utilisateur le résultat de la comparaison au niveau des couleurs et au niveaux des positions 

6) Ensuite l'utilisateur renvoie une nouvelle série de 4 couleurs, etc... /!\ il nous faut un compteur de manche pour que le jeu se termine au max après 10 tentatives OU avant si le joueur à la combinaison exacte (avec un return "message de fin" par exemple)
*/

"use strict";

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
	let tentative;

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
			default: console.log("RIP!");
		}
	}

	for (tentative = 0; tentative < 10; tentative++)
	{
		if (tentative == 9)
		{
			console.log("Vous avez atteint 10 tentatives. Vous avez perdu");
			break;
		}
		else if (tentative > 0) 
		{
			console.log ("Retentez votre chance !");
		}
		for  (let emplacement=1; emplacement<5; emplacement++) 
		{
			couleurChoisie = prompt("Quelle couleur voulez-vous mettre à l'emplacement  " + emplacement + " ? Si vous voulez arrêter de jouer, écrivez\"stop\"");
			
			if ((couleurChoisie == "orange") ||
				(couleurChoisie == "bleu") ||
				(couleurChoisie == "rouge") || 
				(couleurChoisie == "vert") ||
				(couleurChoisie == "jaune") || 
				(couleurChoisie == "violet"))
			{
				reponseUser.push(couleurChoisie);
			}
			else if (couleurChoisie == "stop")
			{
				break;
			}
			else 
			{
				console.log("Erreur, nous n’avons pas compris. Veuillez choisir une couleur parmi orange, bleu, rouge, vert, jaune et violet");
				emplacement -= 1;
			}
			for (let compteur = 0; compteur < reponseUser.length; compteur++)
			{
			if ( reponseUser[compteur] == combinaisonOrdi[compteur] )
			{
				console.log("La couleur  " + (compteur + 1) +" est bonne !")
			}
			}
		}
		if ((reponseUser[0] == combinaisonOrdi[0]) && (reponseUser[1] == combinaisonOrdi[1]) && (reponseUser[2] == combinaisonOrdi[2]) && (reponseUser[3] == combinaisonOrdi[3]))
		{
			console.log("Bravo, vous avez gagné");
		break;
		}
		for (let compteur = 0; compteur < reponseUser.length; compteur++)
		{
			if ( reponseUser[compteur] == combinaisonOrdi[compteur] )
			{
				console.log("La couleur  " + (compteur + 1) +" est bonne !")
			}
		}
	}
}

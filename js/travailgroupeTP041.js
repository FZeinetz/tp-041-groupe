"use strict";

/**
 * Fonction qui respecte à peu de choses près le principe du jeu de société "Mastermind" :
 * Le but du jeu Mastermind est pour le joueur de deviner en un minimum de tentatives une combinaison de 4 couleurs choisies aléatoirement (ici, par l'ordinateur) 
 *
 * Cette fonction ne reçoit aucun paramètre et ne retourne rien.
 */

function jouerAuMastermind()
{
	// déclaration des variables 
	let combinaisonOrdi = []; // tableau contenant la combinaison de couleurs choisie aléatoirement
	let couleurChoisie; // Couleur entrée par l'utilisateur lorsque demandé 
	let reponseUser = []; // tableau contenant la combinaison choisie par l'utilisateur
	let tentative; // nombre de tentatives de l'utilisateur

	for (let compteur=0 ; compteur<4; compteur++) // Définition de la combinaison de l'ordinateur dans un tableau
	{
	combinaisonOrdi.push(Math.floor(Math.random() * 6)) // Attribution de 4 chiffres aléatoires entre 0 et 5 pour les 4 premiers emplacements de l'array 

		switch (true) // Conversion des chiffres en string pour chacune des couleur proposée
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

	for (tentative = 0; tentative < 10; tentative++) // Boucle qui permet les 10 tentatives possibles en les comptant
	{
		if (tentative == 9) // Sortie de la boucle si les 10 tentatives sont écoulées et affichage de la réponse
		{
			console.log("Vous avez atteint 10 tentatives. Vous avez perdu");
			console.log("La réponse était " + combinaisonOrdi[0] + ", " + combinaisonOrdi[1] + ", " + combinaisonOrdi[2] + ", " + combinaisonOrdi[3] + ".");
			break;
		}
		else if (tentative > 0) // Message "Retentez votre chance" si l'utilisateur n'est pas à sa première tentative
		{
			alert("Vous n'avez pas trouvé la combinaison correcte. Fin de la manche "+ tentative +". Retentez votre chance ! Encore "+ (10 - tentative) + " tentative(s).");
		}
		for  (let emplacement=1; emplacement<5; emplacement++) // Boucle servant au remplissage du tableau par l'utilisateur 
		{
			couleurChoisie = prompt("Quelle couleur voulez-vous mettre à l'emplacement  " + emplacement + " ? Couleurs : orange, bleu, rouge, vert, jaune, violet"); // Remplissage de l'emplacement par l'utilisateur 
			
			if ((couleurChoisie == "orange") || (couleurChoisie == "bleu") || (couleurChoisie == "rouge") || (couleurChoisie == "vert") || (couleurChoisie == "jaune") || (couleurChoisie == "violet")) // Voir si les valeurs encodées correspondent aux couleurs reconnues par le programme
			{
				reponseUser[emplacement-1]=couleurChoisie;
			}
			else // Message d'erreur si incompréhension de la valeur donnée
			{
				console.log("Erreur, nous n’avons pas compris. Veuillez choisir une couleur parmi orange, bleu, rouge, vert, jaune et violet");
				emplacement -= 1;
			}
			if ( reponseUser[emplacement-1] == combinaisonOrdi[emplacement-1] ) // Comparaison avec la couleur choisie par l'ordinateur à cet emplacement et affichage si la couleur correspond
			{
			console.log("La couleur  " + emplacement +" est bonne !");
			}
		}
		if ((reponseUser[0] == combinaisonOrdi[0]) && (reponseUser[1] == combinaisonOrdi[1]) && (reponseUser[2] == combinaisonOrdi[2]) && (reponseUser[3] == combinaisonOrdi[3])) // Comparaison du tableau de l'utilisateur avec le tableau de l'ordinateur et arrêt de la boucle si gagné
		{
			console.log("Bravo, vous avez gagné");
		break;
		}
	}
}

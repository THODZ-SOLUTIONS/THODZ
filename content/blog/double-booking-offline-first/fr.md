---
title: 'Comment nous avons supprimé la double réservation dans une app hors-ligne'
description: 'Une voiture rendue à 10:00 peut repartir à 10:00. Y arriver a demandé de vérifier le chevauchement deux fois, et de comprendre ce qu’est vraiment un intervalle de réservation.'
metaTitle: 'Supprimer la double réservation hors-ligne'
metaDescription: 'Une voiture rendue à 10:00 peut repartir à 10:00. Y arriver a demandé de vérifier le chevauchement deux fois, à la bonne granularité.'
date: 2026-11-17
author: 'THODZ SOLUTIONS'
---

Une agence de location tourne sur un comptoir. Quelqu’un entre, demande un Duster pour quatre jours, et la personne derrière le bureau doit savoir en deux secondes si la voiture est libre. Si elle se trompe, la même voiture a été promise à deux personnes le même après-midi — ce qu’on découvre quand la seconde arrive.

C’est l’erreur coûteuse de ce métier, et c’est celle sur laquelle nous avons mis le plus de soin en construisant [Djalil Location](/fr/work/djalil-location), une application Windows hors-ligne d’abord pour exactement ce comptoir. Voici ce que cela a demandé.

## La vérification dans le formulaire n’est pas la vérification

L’implémentation évidente est une validation sur le formulaire de réservation : quand les dates changent, on interroge les réservations existantes de cette voiture, et si l’une d’elles chevauche, on affiche une erreur et on désactive Enregistrer.

C’est nécessaire, et ce n’est pas suffisant. Une vérification qui ne tourne que dans l’interface tient jusqu’au moment où deux choses arrivent en même temps. Deux employés sur deux postes, ou une personne avec le formulaire ouvert dans deux fenêtres, ou un disque lent entre la validation et l’écriture — et les deux réservations passent la validation, parce qu’au moment où chacune a été validée la voiture était réellement libre.

La fenêtre est petite. C’est aussi exactement celle qui s’ouvre un vendredi après-midi chargé, c’est-à-dire au pire moment.

La règle doit donc vivre là où on ne peut pas la court-circuiter : **à l’intérieur de la transaction d’écriture**. La vérification du formulaire reste — c’est elle qui rend l’application agréable, puisqu’on apprend le conflit en regardant encore les dates plutôt qu’après avoir cliqué — mais c’est un confort, pas la garantie. La garantie tourne de nouveau au moment de l’écriture, contre les données que l’écriture va toucher, et refuse l’insertion si le monde a changé entre-temps.

Deux vérifications, délibérément. Une pour l’humain, une pour la justesse.

## Qu’est-ce qu’un intervalle de réservation, exactement ?

Le second problème est plus subtil, et c’est là que la plupart des implémentations se trompent discrètement.

Une réservation va d’une heure de départ à une heure de retour. La question est de savoir si les bornes appartiennent à l’intervalle. Si une voiture est réservée jusqu’au mardi 10:00 et que quelqu’un la veut à partir du mardi 10:00, y a-t-il conflit ?

Si l’on traite l’intervalle comme fermé aux deux bouts — `[début, fin]` — alors oui, il y a conflit, car les deux réservations contiennent l’instant 10:00. Le système refuse une réservation parfaitement raisonnable. Le personnel découvre qu’il ne peut pas faire une chose qu’il peut manifestement faire, et commence à contourner le logiciel : le début de la fin pour tout outil interne.

La solution est de traiter l’intervalle comme **semi-ouvert** : `[début, fin)`. L’instant de départ appartient à la réservation, celui de fin non. Deux intervalles se chevauchent quand `a.début < b.fin ET b.début < a.fin` — noter les comparaisons strictes. Sous cette règle, une voiture rendue à 10:00 peut repartir à 10:00, et une voiture rendue à 10:00 ne peut pas être donnée à quelqu’un qui la voulait dès 09:59.

C’est le même raisonnement que pour l’indexation des plages temporelles en base, et la raison pour laquelle la plupart des bibliothèques de dates traitent les plages comme semi-ouvertes. Cela mérite un commentaire à côté de la requête : la prochaine personne qui la lira se demandera si le `=` manquant est un bug.

## À la minute, pas à la journée

Les premières versions de ce genre de système stockent souvent des dates et non des instants. C’est tentant : une location fait « quatre jours », l’interface montre un sélecteur de dates, et les dates sont plus simples.

Cela s’effondre au comptoir. Une voiture qui rentre mardi matin et repart mardi après-midi, c’est une journée d’inventaire et deux réservations, et un modèle à la journée ne sait pas l’exprimer. On finit soit avec une journée de chiffre perdue à chaque rotation, soit avec un contournement impliquant un carnet.

Le modèle stocke donc un instant de départ et un instant de retour, chacun avec une heure choisie par l’utilisateur, et la règle de chevauchement tourne à la minute. La même comparaison semi-ouverte, avec plus de précision dessous.

## L’entretien est une réservation lui aussi

Dernier élément : une voiture à l’atelier est indisponible pour les mêmes raisons qu’une voiture louée, et si les périodes d’entretien vivent dans une table séparée vérifiée par du code séparé, l’un des deux chemins finira par être oublié.

Ils ont la même forme — une voiture, un début, une fin — ils passent donc par la même vérification de chevauchement. Quand le contrôle échoue, il nomme ce avec quoi il entre en collision, réservation ou période d’entretien. La personne au comptoir n’a pas besoin de savoir de quelle table cela vient ; elle a besoin de savoir que la voiture n’est pas disponible, et pourquoi.

## Ce que cela a apporté

Concrètement, dans l’application livrée :

- Le formulaire vérifie au fil du choix des dates et nomme la réservation ou la période d’entretien en conflit, plutôt que d’afficher « indisponible ».
- Enregistrer reste désactivé tant qu’un conflit existe : l’erreur arrive avant l’effort.
- La même règle tourne dans la transaction d’écriture : deux personnes saisissant au même instant ne peuvent pas réussir toutes les deux.
- Une voiture rendue à 10:00 peut repartir à 10:00.
- La vue de disponibilité utilise la règle identique, donc ce que le calendrier montre et ce que le formulaire autorise ne peuvent jamais diverger.

Ce dernier point vaut plus qu’il n’en a l’air. Le mode de défaillance des systèmes de réservation n’est presque jamais le plantage — c’est un calendrier qui dit une chose, un formulaire qui en dit une autre, et un personnel qui apprend à ne faire confiance à aucun des deux.

## La version générale

Rien de tout cela n’est propre aux voitures. Tout système qui alloue une ressource unique dans le temps — salles, matériel, rendez-vous, machines — doit prendre les trois mêmes décisions :

1. Où vit la règle ? Pas seulement dans le formulaire. Dans l’écriture.
2. Les intervalles sont-ils semi-ouverts ? Ils devraient l’être, sinon vos utilisateurs se battront contre la borne.
3. Quelle granularité ? Celle dans laquelle vos utilisateurs travaillent vraiment, et ce n’est presque jamais la journée entière.

Réglez ces trois points et le reste est de l’interface. Ratez-les et aucune interface ne sauvera le système.

*Djalil Location est une application Windows hors-ligne d’abord, construite avec Electron, Vue 3 et SQLite. L’[étude de cas](/fr/work/djalil-location) couvre le reste du système : la flotte, la frise de disponibilité et les sauvegardes chiffrées.*

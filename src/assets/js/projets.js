import Projet from "./Projet";

import imgUnZeste from '../img/un-zeste.png';
import imgLaRuche from '../img/la-ruche.png';
import imgA2 from '../img/a2.png';
import imgPalette from '../img/palette.png';
import imgDesignChallenge from '../img/design-challenge.png';
import imgBorneo from '../img/borneo.png';
import imgMontgolfiere from '../img/montgolfiere.png';
import imgMotionDesign from '../img/motion-design.png';
import imgColorGame from '../img/color-game.png';
import imgPierreFeuilleCiseaux from '../img/pierre-feuille-ciseaux.png';
import imgTicTacToe from '../img/tic-tac-toe.png';
import imgCafeSmith from '../img/cafe-smith.png';
import imgMcpcUx from '../img/mcpc-ux.png';
import imgMemoryGame from '../img/memory-game.png';

const projets = [
    new Projet(
        imgUnZeste,
        'Un Zeste de Clémentine',
        'Projet de site web avec un panier d\'achat',
        'Programmation, Design UI',
        ['Projet dans le cadre du cours d\'interface mobile.', 
            'Langages utilisés: HTML, Tailwind et Javascript.', 
            'Implémentation d\'un panier fonctionnel, des produits générés par une class Javascript, un formulaire et une infolettre avec validation de courriel.'],
        ['programmation', 'design'],
        'Juin 2024',
        'https://tl-02-interface-mobile-v4.vercel.app/',
        'unzeste'
    ),
    new Projet(
        imgLaRuche,
        'La Ruche',
        'blablabla',
        'Design UX / UI',
        ['Projet dans le cadre du cours de Design Web.', 
            'Création d\'un concept, recherche sur les utilisateurs, les compétiteurs, User Flow', 
            'Design d\'un parcours utilisateur, des maquettes filaires, des maquettes haute fidélité, du prototypage final et du UI kit.'],
        ['UI', 'UX'],
        'Mai 2024',
        'https://www.figma.com/proto/m67k5H1VJST5X5zTyHnCzc/UI-Kit?page-id=105%3A1849&node-id=170-4765&viewport=300%2C-652%2C0.17&t=Q4qBzwFfLy6BzsaH-1&scaling=scale-down&starting-point-node-id=170%3A4765&classId=52aee0ef-409a-4d8a-a7fc-2b90b0636a3d&assignmentId=c197be93-1dcb-46c4-ad53-bff9c08867a1&submissionId=bde25ec6-03c2-704f-2825-055fe319821e',
        'laruche'
    ),
    new Projet(
        imgA2,
        'Incubateur A2',
        'blablabla',
        'Design UX / UI',
        ['Projet dans le cadre du premier cours de Design Web. Le thème est un incubateur.', 
            'Recherche sur le marché, les utilisateurs et les compétiteurs. Recherche de références.', 
            'Design de deux pages, création des illustrations et des animations.'],
        ['UI', 'UX', 'graphisme'],
        'Décembre 2023',
        'https://www.figma.com/design/v9XCB5gp2OReOfhRMsE9eI/A2?node-id=1-1154&t=U84hwU2J22RiCKQ1-1',
        'a2'
    ),
    new Projet(
        imgPalette,
        'Palette aléatoire',
        'blablabla',
        'Programmation',
        ['Projet dans le cadre du cours d\'interactivité de l\'interface.', 
            'Langages utilisés: HTML, CSS et Javascript.', 
            'Création d\'une palette aléatoire générée aléatoirement en fonction de la première couleur. Calcul des valeurs HSL en JavaScript.'],
        ['programmation'],
        'Fevrier 2024',
        'https://color-generator-smoky.vercel.app/',
        'palette'
    ),
    new Projet(
        imgDesignChallenge,
        'Divers projets UI',
        'blablabla',
        'Design UI',
        ['Projets réalisés au cours de la session de Design Web.', 
            'Recherche, maquettes filaires, User Flows, utilisation de Figma, de banques de composants.', 
            'Chaque challenge porte sur un thème différent. Interface utilisateur, formulaire, page produit d\'une boutique en ligne, landing page, billet d\avion.'],
        ['UI', 'UX'],
        'Mai 2024',
        'https://www.figma.com/design/MNcl76WxCnkE1PFmhAVFmb/Design-Challenge---Cl%C3%A9mentine?node-id=0-1&t=mBXoIvAPB7hUoJXM-1',
        'designchallenge'
    ),
    new Projet(
        imgBorneo,
        'Identité visuelle',
        'blablabla',
        'Graphisme',
        ['Projet dans le cadre du cours de design graphique', 
            'Création d\'un logo. Concept libre. Recherche, essais divers, mockups, création d\'un guide de normes graphiques.', 
            'Logiciels utilisés: Adobe Photoshop pour les mockups, Adobe Illustrator pour le logo.'],
        ['graphisme'],
        'Décembre 2023',
        'https://www.figma.com/design/YZJiWBmzzMHMjLJ3qhRgyW/Design?node-id=1-7&t=gO2Tj3uCuBtKzA9C-1',
        'borneo'
    ),
    new Projet(
        imgMontgolfiere,
        'Passion Montgolfière',
        'blablabla',
        'Programmation',
        ['Projet dans le cadre du cours de production d\interface animées.', 'Langages utilisés: HTML, CSS et Javascript.', 'Recherche sur les bibliothèques d\'animation CSS et Javascript.'],
        ['programmation'],
        'Juin 2024',
        'https://tl-02-piia-clementine.vercel.app/',
        'montgolfiere'
    ),
    new Projet(
        imgMotionDesign,
        'Motion Design',
        'blablabla',
        'Motion Design',
        ['Projet dans le cadre du cours de production d\animation.', 'Logiciels utilisés: Adobe Animate et Adobe After Effects', 'Production d\'une courte vidéo de Motion Design. Dessin, animation, esthétique.'],
        ['animation'],
        'Avril 2024',
        'https://youtu.be/NhTsudZq918',
        'motiondesign'
    ),
    new Projet(
        imgCafeSmith,
        'Recommandations',
        'blablabla',
        'Design UX',
        ['Projet dans le cadre du cours d\'ergonomie de l\'interface', 'Tâches réalisées: Audit ergonomique et rapport de recommandations.', 'Travail d\'équipe sur le site web du café Smith, afin de repérer les points à améliorer et proposer des recommandations.'],
        ['UX'],
        'Mars 2024',
        '#',
        'cafesmith'
    ),
    new Projet(
        imgColorGame,
        'Jeu des couleurs',
        'blablabla',
        'Programmation',
        ['Projet dans le cadre du cours d\'interface mobile.', 'Langages utilisés: HTML, CSS et Javascript.', 'Création d\'un jeu de rapidité; enregistrement des scores, accéleration du jeu.'],
        ['programmation', 'jeux'],
        'Janvier 2024',
        'https://color-game-kappa-peach.vercel.app/',
        'colorgame'
    ),
    new Projet(
        imgPierreFeuilleCiseaux,
        'Pierre Feuille Ciseaux',
        'blablabla',
        'Programmation',
        ['Projet personnel', 'Langages utilisés: HTML, CSS et Javascript.', 'Recherche et mise en place de la logique pour un jeu de pierre feuille ciseaux.'],
        ['programmation', 'jeux'],
        'Fevrier 2024',
        'https://pierre-feuille-ciseaux-blush.vercel.app/',
        'pierrefeuilleciseaux'
    ),
    new Projet(
        imgMcpcUx,
        'Maison de la Culture du Pic Champlain',
        'blablabla',
        'Recherche, Design UX',
        ['Projet pour un OBNL existant: La Maison de la Culture du Pic Champlain.', 'Tâches effectuées: Recherche sur les utilisateurs et les compétiteurs, travail d\'architecture, refonte du site web, maquettes basses et haute fidélité, prototype.', 'Travail d\'équipe.'],
        ['UX'],
        'Juillet 2024',
        'https://www.figma.com/design/QfkPJ5HytDJHcPMwLEWSZH/MCPC_Projet-I_Design?node-id=1648-12850&t=f1Ag0t5pfL7PrKwz-1',
        'mcpcux'
    ),
    new Projet(
        imgMemoryGame,
        'Jeu de mémoire',
        'blablabla',
        'Programmation',
        ['Projet dans le cadre du cours d\'interface mobile.', 'Langages utilisés: HTML, Tailwind et Javascript.', 'Implémentation d\'un panier fonctionnel; Des produits générés par une class Javascript; Un formulaire et une infolettre avec validation de courriel.'],
        ['programmation', 'jeux'],
        'Mars 2024',
        '#',
        'memorygame'
    ),
    new Projet(
        imgTicTacToe,
        'Tic-tac-toe',
        'blablabla',
        'Programmation',
        ['Projet dans le cadre du cours d\'interface mobile.', 'Langages utilisés: HTML, Tailwind et Javascript.', 'Implémentation d\'un panier fonctionnel; Des produits générés par une class Javascript; Un formulaire et une infolettre avec validation de courriel.'],
        ['programmation', 'jeux'],
        'Fevrier 2024',
        'https://tic-tac-toe-umber-delta.vercel.app/',
        'tictactoe'
    ),
]

export default projets;

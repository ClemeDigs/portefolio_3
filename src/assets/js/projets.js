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
        'blablabla',
        'Programmation, Design UI',
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
        ['UI', 'UX', 'graphisme'],
        'Décembre 2023',
        '#',
        'a2'
    ),
    new Projet(
        imgPalette,
        'Palette aléatoire',
        'blablabla',
        'Programmation',
        ['programmation'],
        'Fevrier 2024',
        '#',
        'palette'
    ),
    new Projet(
        imgDesignChallenge,
        'Divers projets UI',
        'blablabla',
        'Design UI',
        ['UI'],
        'printemps 2024',
        '#',
        'designchallenge'
    ),
    new Projet(
        imgBorneo,
        'Identité visuelle',
        'blablabla',
        'Graphisme',
        ['graphisme'],
        'Décembre 2023',
        '#',
        'borneo'
    ),
    new Projet(
        imgMontgolfiere,
        'Passion Montgolfière',
        'blablabla',
        'Programmation',
        ['programmation'],
        'juin 2024',
        '#',
        'montgolfiere'
    ),
    new Projet(
        imgMotionDesign,
        'Motion Design',
        'blablabla',
        'Motion Design',
        ['animation', 'graphisme'],
        'avril 2024',
        '#',
        'motiondesign'
    ),
    new Projet(
        imgCafeSmith,
        'Recommandations',
        'blablabla',
        'Design UX',
        ['UX'],
        'mars 2024',
        '#',
        'montgolfiere'
    ),
    new Projet(
        imgColorGame,
        'Jeu des couleurs',
        'blablabla',
        'Programmation',
        ['programmation', 'jeux'],
        'janvier 2024',
        '#',
        'colorgame'
    ),
    new Projet(
        imgPierreFeuilleCiseaux,
        'Pierre Feuille Ciseaux',
        'blablabla',
        'Programmation',
        ['programmation', 'jeux'],
        'fevrier 2024',
        '#',
        'pierrefeuilleciseaux'
    ),
    new Projet(
        imgMcpcUx,
        'Maison de la Culture du Pic Champlain',
        'blablabla',
        'Recherche, Design UX',
        ['UX'],
        'juillet 2024',
        '#',
        'mcpcux'
    ),
    new Projet(
        imgMemoryGame,
        'Jeu de mémoire',
        'blablabla',
        'Programmation',
        ['programmation', 'jeux'],
        'mars 2024',
        '#',
        'memorygame'
    ),
    new Projet(
        imgTicTacToe,
        'Tic-tac-toe',
        'blablabla',
        'Programmation',
        ['programmation', 'jeux'],
        'fevrier 2024',
        '#',
        'tictactoe'
    ),
]

export default projets;

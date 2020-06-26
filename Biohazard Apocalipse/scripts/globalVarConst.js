//global variables
let imageBackGroundCity;
let imageBackGroundSubway;
let imageMainScreen;
let imageBoy;
let imageZombieNormalMan;
let imageZombieMohawk;
let imageGameOver;
let imageBee;
let imageCoin;

let soundMainScreen;
let soundCity;
let soundJump;
let soundDeath;
let soundWind;
let soundGameOver;
let soundCoin;

let buttonManager;
let fontMainScreen;

let game;
let scenario;
let boy;
let leftBee;
let score;
let coin

let currentScene = 'mainScreen';
let scenes;
let mainScreen;

const matrixBoy = [
  [50,36],
  [660,36],
  [1270, 36],
  [1870, 36],
  [2480, 36],
  [3110, 36],
  [3740, 36],
  [4350, 36],
  [4965, 36],
  [5580, 36],
  [6190, 36], 
  [6800, 36],
  [7420, 36],
  [8650, 36]
];

const matrixZombieNormalMan = [
  [0, 15],
  [0, 15],
  [0, 15],
  [210, 15],
  [210, 15],
  [210, 15],
  [450, 15],
  [450, 15],
  [450, 15],
  [680, 15],
  [680, 15],
  [680, 15],
  [930, 15],
  [930, 15],
  [930, 15],
  [1200, 15],
  [1200, 15],
  [1200, 15]
]

const matrixZombieMohawk = [
  [30, 15],
  [30, 15],
  [30, 15],
  [360, 15],
  [360, 15],
  [360, 15],
  [670, 15],
  [670, 15],
  [670, 15],
  [1004, 15],
  [1004, 15],
  [1004, 15],
  [1350, 15],
  [1350, 15],
  [1350, 15],
  [1700, 15],
  [1700, 15],
  [1700, 15]
]

const matrixBeeLeft = [
  [30,235],
  [235,235]
];
const matrixCoin = [
  [0, 0],
  [0, 0],
  [0, 0],
  [150, 0],
  [150, 0],
  [150, 0],
  [300, 0],
  [300, 0],
  [300, 0],
  [450, 0],
  [450, 0],
  [450, 0],
  [600, 0],
  [600, 0],
  [600, 0]
];

const enemies = [];
import './style.css';
import { BrickleberryCharacter } from './classes/brickleberry';
import { ParadiseCharacter } from './classes/paradise';

const startBtn = document.getElementById('start') as HTMLElement;
const welcomeScreen = document.getElementById('screen-welcome') as HTMLElement;
const selectScreen = document.getElementById('screen-select') as HTMLElement;
const screenBattle = document.getElementById('screen-battle') as HTMLElement;
const screenShop = document.getElementById('screen-shop') as HTMLElement;

startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    selectScreen.classList.remove('hidden');
})


const woodyBtn = document.getElementById('woody') as HTMLElement;
const ethelBtn = document.getElementById('ethel') as HTMLElement;
const malloyBtn = document.getElementById('malloy') as HTMLElement;

const randallBtn = document.getElementById('randall') as HTMLElement;
const ginaBtn = document.getElementById('gina') as HTMLElement;
const bulletBtn = document.getElementById('bullet') as HTMLElement;

const characterPreview = document.getElementById('character-preview') as HTMLElement;

woodyBtn.addEventListener('click', () => showCharacterPreview('woody'));
ethelBtn.addEventListener('click', () => showCharacterPreview('ethel'));
malloyBtn.addEventListener('click', () => showCharacterPreview('malloy'));

randallBtn.addEventListener('click', () => showCharacterPreview('randall'));
ginaBtn.addEventListener('click', () =>  showCharacterPreview('gina'));
bulletBtn.addEventListener('click', () => showCharacterPreview('bullet'));

const characterData = {
    woody: {
        instance: new BrickleberryCharacter("Woody Johnson", 100, 20, 10, 10, 5),
        img: '/images/woody.jpeg'
    },
    ethel: {
        instance: new BrickleberryCharacter("Ethel Anderson", 85, 20, 10, 10, 15),
        img: '/images/ethel1.png'
    },
    malloy: {
        instance: new BrickleberryCharacter("Malloy", 110, 30, 8, 15, 10),
        img: '/images/malloy.jpeg'
    },
    randall: {
        instance: new ParadiseCharacter("Chief Randall Crawford", 130, 18, 12, 5, 2),
        img: '/images/randall.jpeg'
    },
    gina: {
        instance: new ParadiseCharacter("Gina Jabowski", 95, 28, 6, 25, 5),
        img: '/images/gina.webp'
    },
    bullet: {
        instance: new ParadiseCharacter("Bullet", 80, 22, 4, 12, 25),
        img: '/images/bullet1.webp'
    }

}

const previewName = document.getElementById('preview-name') as HTMLElement;
const previewImg = document.getElementById('preview-img') as HTMLImageElement;

const barHp = document.getElementById('bar-hp') as HTMLElement;
const barAttack = document.getElementById('bar-attack') as HTMLElement;
const barDefence = document.getElementById('bar-defence') as HTMLElement;

const critVal = document.getElementById('crit-val') as HTMLElement;
const dodgeDefence = document.getElementById(dodge-val) as HTMLElement;
function showCharacterPreview(charKey: keyof typeof characterData) {
    const char = characterData[charKey];
    const hero = char.instance;
    characterPreview.classList.remove('hidden');
    previewName.textContent = hero.name;
    previewImg.src = char.img;

    barHp.style.width = `${hero.hp}%`;
    barAttack.style.width = `${hero.attack * 2}%`;
    barDefence.style.width = `${hero.defence * 4}%`;

    if (critVal) critVal.textContent = `Crit: ${hero.crit}%`;
    if (dodgeVal) dodgeVal.textContent = `Dodge: ${hero.dodge}%`;
}

selectScreen.addEventListener('click', () => {

})
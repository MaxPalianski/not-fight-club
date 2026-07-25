import { Character } from './character';
export class BrickleberryCharacter extends Character {
    constructor(name: string, hp: number, attack: number, defence: number){
        super(name, hp, attack, defence);
        this.critical += 5;
    }
}
import { Character } from './character';
export class ParadiseCharacter extends Character {
    constructor(name: string, hp: number, attack: number, defence: number){
        super(name, hp, attack, defence);
        this.defence += 2;
    }
}
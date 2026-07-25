import type { BaseCharacter } from "../types";
export class Character implements BaseCharacter {
    name: string;
    level: number;
    hp: number;
    maxHP: number;
    missedAttack: number;
    attack: number;
    defence: number;
    dodge: number;
    critical: number;
    block: number;
    gold: number;
    exp: number;
    maxExp: number;
    constructor(name: string, hp: number, attack: number, defence: number) {
    this.name = name;
    this.level = 1;
    this.hp = hp;
    this.maxHP = hp;
    this.missedAttack = 5;
    this.attack = attack;
    this.defence = defence;
    this.dodge = 5;
    this.critical = 10;
    this.block = 0;
    this.gold = 0;
    this.exp = 0;
    this.maxExp = 100;
    }
    takeDamage(damage: number) {
        let finalDamage = damage - this.defence;
        if (finalDamage < 0) {
            finalDamage = 0;
        }
        this.hp -= finalDamage;
        if(this.hp < 0) {
            this.hp = 0;
        }
        console.log(`${this.name} take ${finalDamage} damage. HP: ${this.hp}`);
    }
    attackEnemy(enemy: Character) {
        enemy.takeDamage(this.attack)
    }
}
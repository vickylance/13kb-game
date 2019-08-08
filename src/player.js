export default class Player {
  constructor(health, mana) {
    this.health = health;
    this.mana = mana;
  }

  takeDamage(dmg) {
    this.health -= dmg;
  }
}
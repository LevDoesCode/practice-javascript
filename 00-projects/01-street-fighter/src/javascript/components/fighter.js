export function Fighter(fighterDetails, direction) {
    this.id = parseInt(fighterDetails._id);
    this.direction = direction;
    this.maxHealth = fighterDetails.health;
    this.health = fighterDetails.health;
    this.attack = fighterDetails.attack;
    this.defense = fighterDetails.defense;
    this.name = fighterDetails.name;
    this.isBlocking = false;
    this.critHitAvailable = true;
    this.element = document.getElementsByClassName(`arena___fighter arena___${direction}-fighter`)[0];
}

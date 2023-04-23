export function Fighter(fighterDetails, direction) {
    this.id = parseInt(fighterDetails._id);
    this.heatlh = fighterDetails.health;
    this.attack = fighterDetails.attack;
    this.defense = fighterDetails.defense;
    this.name = fighterDetails.name;
    this.isBlocking = false;
    this.isCrit = true;
    this.element = document.getElementsByClassName(`arena___fighter arena___${direction}-fighter`)[0];
}

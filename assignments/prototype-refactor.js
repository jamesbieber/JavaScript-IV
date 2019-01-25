
function GameObject(characterAttributes) {
  this.createdAt = characterAttributes.createdAt;
  this.dimensions = characterAttributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return "GameObject was removed from the game.";
}



function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}


function Humanoid(traits) {
  CharacterStats.call(this, traits);
  this.team = traits.team;
  this.weapons = traits.weapons;
  this.language = traits.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}
 


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt);
  console.log(archer.dimensions);
  console.log(swordsman.healthPoints);
  console.log(mage.name);
  console.log(swordsman.team);
  console.log(mage.weapons);
  console.log(archer.language);
  console.log(archer.greet());
  console.log(mage.takeDamage());
  console.log(swordsman.destroy());

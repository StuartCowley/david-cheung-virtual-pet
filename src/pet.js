class Pet {
  constructor(name) {
    if (!(this instanceof Pet))
    return new Pet(name)
    this.name = name;
    this.age = 0;         // initial value
    this.hunger = 0;      // initial value
    this.fitness = 10;    // initial value
    this.children = [];   // initial value
  }

  // add property(getter) to Pet.prototype object ==> after it ==> reset all prototype methods
  get isAlive() {
    const DEATH_AGE = 30;
    const DEATH_HUNGER = 10;
    const DEATH_FITNESS = 0;
    return this.age < DEATH_AGE && this.hunger < DEATH_HUNGER && this.fitness > DEATH_FITNESS;
  }

  // after define prototype property, start to define prototype methods
  // all pets will share the same growUp method.
  // save memory
  growUp() {
    const ADD_HUNGER = 5;
    const MINUS_FITNESS = 3;
    this.age += 1;
    this.hunger += ADD_HUNGER;
    this.fitness -= MINUS_FITNESS;    
  }

  // give them some exercise to boost their fitness levels
  walk() {
    const MAXIMUM_FITNESS = 10;
    const ADD_FITNESS = 4;
    const DEATH_MSG = 'Your pet is no longer alive :(';
  
    if (!this.isAlive) {
      throw new Error(DEATH_MSG);
    }
    if (this.fitness + ADD_FITNESS <= MAXIMUM_FITNESS) {
      this.fitness += ADD_FITNESS;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  }

  // decreases hunger level
  feed() {
    const MIN_HUNGER = 0;
    const MINUS_HUNGER = 3;
    const DEATH_MSG = 'Your pet is no longer alive :(';
  
    if (!this.isAlive) {
      throw new Error(DEATH_MSG);
    }
    if (this.hunger - MINUS_HUNGER > MIN_HUNGER) {
      this.hunger -= MINUS_HUNGER;
    } else {
      this.hunger = MIN_HUNGER;
    }
  }

  // lets you know how the pet is feeling
  checkUp() {
    const LIMIT_FIT = 3;
    const LIMIT_HUNGER = 5;
    const isHunger = this.hunger >= LIMIT_HUNGER;
    const isNotFit = this.fitness <= LIMIT_FIT;
    if (isHunger && isNotFit) {
      return 'I am hungry AND I need a walk';
    } else if (isNotFit) {
      return 'I need a walk';
    } else if (isHunger) {
      return 'I am hungry';
    } else {
      return 'I feel great!';
    }
  }

  // adopt children pet
  adoptChild(child) {
    this.children.push(child);
  }

  // haveBaby Pet object
  haveBaby(babyName) {
    const child = new Pet(babyName);
    this.children.push(child);
  }
}

module.exports = Pet;
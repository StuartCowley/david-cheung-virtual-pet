function Pet(name){
  if (!(this instanceof Pet))
    return new Pet(name)
  this.name = name;
  this.age = 0;         // initial value
  this.hunger = 0;      // initial value
  this.fitness = 10;    // initial value
}

// all pets will share the same growUp method.
// save memory
//
Pet.prototype.growUp = function() {
  const ADD_HUNGER = 5;
  const MINUS_FITNESS = 3;
  this.age += 1;
  this.hunger += ADD_HUNGER;
  this.fitness -= MINUS_FITNESS;
};

// give them some exercise to boost their fitness levels
Pet.prototype.walk = function() {
  const MAXIMUM_FITNESS = 10;
  const ADD_FITNESS = 4;
  if (this.fitness + ADD_FITNESS <= MAXIMUM_FITNESS) {
    this.fitness += ADD_FITNESS;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

module.exports = Pet;
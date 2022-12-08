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
  const moreHunger = 5;
  const lessFitness = 3;
  this.age += 1;
  this.hunger += moreHunger;
  this.fitness -= lessFitness;
};

// give them some exercise to boost their fitness levels
Pet.prototype.walk = function() {
  const maxFitness = 10;
  const moreFitness = 4;
  this.fitness += moreFitness;
  if (this.fitness > maxFitness) {this.fitness = maxFitness;};
};

module.exports = Pet;
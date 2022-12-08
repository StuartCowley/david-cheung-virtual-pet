function Pet(name){
  if (!(this instanceof Pet))
    return new Pet(name)
  this.name = name;
  this.age = 0;
}

// all pets will share the same growUp method.
// save memory
//
Pet.prototype.growUp = function() {
  this.age += 1;
};
module.exports = Pet;
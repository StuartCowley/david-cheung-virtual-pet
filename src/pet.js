function Pet(name){
  if (!(this instanceof Pet))
    return new Pet(name)
  this.name = name
}

module.exports = Pet;
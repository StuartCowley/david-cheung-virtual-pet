const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);

  });

});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);

    pet.growUp();

    expect(pet.age).toEqual(2);
    expect(pet.hunger).toEqual(10);
    expect(pet.fitness).toEqual(4);

  });
});

describe('walk', () => {
  it('increments the fitness by 4, but max 10', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);

    pet.growUp();
    pet.growUp();
    expect(pet.fitness).toEqual(4);

    pet.walk();
    expect(pet.fitness).toEqual(8);

    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

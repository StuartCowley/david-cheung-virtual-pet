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

    pet.growUp();                    // hunger:5, fitness:7
    pet.growUp();                    // hunger:10, fitness:4
    expect(pet.fitness).toEqual(4);

    //pet.walk();                    // hunger:10, fitness:8
    //expect(pet.fitness).toEqual(8);

    //pet.walk();                    // hunger:10, fitness:10
    //expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('decreases hunger level', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);

    pet.growUp();                     // hunger:5, fitness:7
    expect(pet.hunger).toEqual(5);

    pet.feed();                       // hunger:2, fitness:7
    expect(pet.hunger).toEqual(2);

    pet.feed();                       // hunger:0, fitness:7
    expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
  it('lets you know how the pet is feeling', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);     // hunger:0, fitness:10

    pet.growUp();                   // hunger:5, fitness:7
    expect(pet.hunger).toEqual(5);
    expect(pet.checkUp()).toBe('I am hungry');

    pet.growUp();
    pet.growUp();                   // hunger:15, fitness:1
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');

    //pet.feed();                     // hunger:12, fitness:1
    //pet.feed();                     // hunger:9, fitness:1
    //pet.feed();                     // hunger:6, fitness:1
    //pet.feed();                     // hunger:3, fitness:1
    //expect(pet.checkUp()).toBe('I need a walk');

    //pet.walk();                     // hunger:3, fitness:5
    //pet.walk();                     // hunger:3, fitness:9
    //expect(pet.checkUp()).toBe('I feel great!');
  });
});

describe('isAlive', () => {
  it('lets you know how the pet is feeling', () => {
    const pet = new Pet('Fido');
    expect(pet.isAlive).toEqual(true);     // hunger:0, fitness:10

    pet.growUp();
    pet.growUp();
    expect(pet.isAlive).toEqual(false);     // hunger:10, fitness:4
  });
});

describe('adoptChild: child may not be Pet object', () => {
  it('test adoptChild result', () => {
    const parent = new Pet('Dave');
    const child = new Pet('Amelia');
    parent.adoptChild(child);
    expect(parent.children[0]).toMatchObject(child);
  });

  it('feed adopt child', () => {
    const parent = new Pet('Dave');
    const child = new Pet('Amelia');
    parent.adoptChild(child);
    expect(child.hunger).toEqual(0);

    parent.children[0].growUp();
    expect(child.hunger).toEqual(5);

    parent.children[0].feed();
    expect(child.hunger).toEqual(2);
  });
});

describe('haveBaby: child must be Pet object', () => {
  it('test haveBaby result', () => {
    const parent = new Pet('Dave');
    parent.haveBaby('Amelia');
    expect(parent.children[0].name).toBe('Amelia');
    expect(parent.children[0].children).toEqual([]);
    expect(parent.children[0]).toBeInstanceOf(Pet);

    parent.haveBaby('Billy');
    expect(parent.children[1].name).toBe('Billy');
    expect(parent.children[1].children).toEqual([]);
    expect(parent.children[1]).toBeInstanceOf(Pet);
  });
});


// Pattern definition
/** Create an abstract Animal class that only have speak method */
class Animal {
  /** Very simple constructor */
  constructor() { }

  /** Empty speak method, to explicit the required methods */
  speak = () => ''
}

/** Little Dog class inherit from Animal */
class LittleDog extends Animal {
  speak = () => 'Ouaf'
}

/** Huge Dog class inherit from Animal */
class HugeDog extends Animal {
  speak = () => 'OUAF'
}

/** Create an abstract Building class that manage a size */
class Building {
  /** Private size property */
  size = 0

  /** Constructor that setthe size for this building */
  constructor(size) {
    this.size = size
  }

  /** Public method that return the current size */
  getSize = () => this.size
}

/** Small Buidling class inherit from Building */
class SmallBuilding extends Building {

  /** Constructor that set a small size */
  constructor() {
    super(5)
  }
}

/** Huge Buidling class inherit from Building */
class HugeBuilding extends Building {

  /** Constructor that set a huge size */
  constructor() {
    super(300)
  }
}

/** Abstract Factory who creates the Animals and Buildings */
class Factory {

  /** Abstract method for Animal creation */
  createAnimal = () =>  null

  /** Abstract method for Building creation */
  createBuilding = () => null
}

/** Concrete factory who create small animals and building */
class SmallFactory extends Factory {

  /** Create a concrete small Animal */
  createAnimal = () => new LittleDog()

  /** Create a concrete small Building */
  createBuilding = () => new SmallBuilding()
}

/** Concrete factory who create huge animals and building */
class HugeFactory extends Factory {

  /** Create a concrete huge Animal */
  createAnimal = () => new HugeDog()

  /** Create a concrete huge Building */
  createBuilding = () => new HugeBuilding()
}

// Pattern usage
const perform = (factory) => {
  const animal = factory.createAnimal()
  const building = factory.createBuilding()
  console.log(animal.speak(), building.getSize())
}

console.log('In case I have not enough place, I would like a small zoo')
/** I only create a different AnimalFactory, but the usage of the code is the same elsewhere */
perform(new SmallFactory())

console.log('In case I have a loooot of place, I would like a HUGE zoo')
/** I only create a different AnimalFactory, but the usage of the code is the same elsewhere */
perform(new HugeFactory())

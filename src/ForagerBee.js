class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super() //call superclass

    //Overwrite properties from superclass
    this.age = 10;
    this.job = 'find pollen';

    //inherit from superclass
    //this.color = 'yellow';
    //this.food = 'jelly';

    //new methods
    this.canFly = true;
    this.treasureChest = [];
  }

  //Inherited methods
  /*
  eat() {
    ...
  } */

  //New methods
  forage(treasure) {
    return this.treasureChest.push(treasure);
  }
};

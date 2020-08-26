//inheritance in ES6 happens in the class definition through use of: class SUBCLASS extends SUPERCLASS and then calling super() in the body of constructor()

class Bee extends Grub {
  // Reminder: Pseudoclassical
  //Grub.call(this); --> Call the Grub superclass for inheritance. SEE ABOVE

  constructor() {
    //Call superclass
    super();

    // overwrite properties from superclass
    this.age = 5;
    this.color = 'yellow';

    // add a job property
    this.job = 'Keep on growing';

    //Inherited from superclass
    //this.food = 'jelly';
  }

  //Inherited methods from superclass
  /*
  eat() {
    ...
  } */

};

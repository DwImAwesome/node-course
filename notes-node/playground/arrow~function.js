var square = x => x * x;

console.log(square(5));

var user = {
  name: 'Frederik',
  sayHi: () => {
    console.log(`Hi. i'm ${this.name}`);
  },
  sayhiAlt () {
    console.log(`Hi. i'm ${this.name}`);
  }
};


user.sayHi();
user.sayhiAlt();

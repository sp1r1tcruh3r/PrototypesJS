/*Добавьте в Object.prototype функцию hash, которая позволяет извлекать вложенные значения из объекта.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

obj.hash('car'); // undefined
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

Object.prototype.hash = function hash(str) {
  const arr = str.split('.');
  return arr.reduce((acc, item) =>
    (acc === undefined ? acc : acc[item]), this);
};

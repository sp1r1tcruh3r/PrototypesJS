/*
Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.

import buildHtml from './solution';

const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

buildHtml(data);

<html>
  <meta><title>hello, hexlet!</title></meta>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>

Подсказки

    Для объединения массива в строку, используйте метод join(separator).
    Эту задачу можно решить практически без единой условной конструкции используя полиморфизм на основе объекта (ключ, значения).

Решение учителя может повергнуть вас в шок. Оно не содержит ничего нового по сравнению с тем что вы проходили, но по максимуму использует пройденные идеи, функции высшего порядка, неизменяемость, полиморфизм. Потратьте время, разберитесь с ним.
*/
const solution = (arr) => {
  class Tag {
    constructor(array) {
      this.array = array;
    }

    tagName() {
      return `<${this.array[0]}${this.attribute()}>${this.body()}${this.children()}</${this.array[0]}>`;
    }

    attribute() {
      if (!(this.array[1] instanceof Array) && this.array[1] instanceof Object) {
        const func = (acc, key) => `${acc} ${key}="${this.array[1][key]}"`;
        return Object.keys(this.array[1]).reduce(func, '');
      }
      return '';
    }

    body() {
      if (typeof this.array[1] === 'string') {
        return `${this.array[1]}`;
      }
      if (typeof this.array[2] === 'string') {
        return `${this.array[2]}`;
      }
      return '';
    }

    children() {
      let newArr;
      if (this.array[1] instanceof Array) {
        [, newArr] = this.array;
      } else if (this.array[2] instanceof Array) {
        [, , newArr] = this.array;
      } else if (this.array[3] instanceof Array) {
        [, , , newArr] = this.array;
      } else {
        return '';
      }
      const func = (acc, elem) => {
        const nTag = new Tag(elem);
        return `${acc}${nTag.tagName()}`;
      };

      return newArr.reduce(func, '');
    }
  }

  const newTag = new Tag(arr);
  return newTag.tagName();
};
export default solution;
// END

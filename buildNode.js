//singleTag.js
class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
  }
};
export default SingleTag;
//pairedTag.js
class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ? this.children.join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
  }
};
export default PairedTag;
//buildNode.js
import PairedTag from './PairedTag';
import SingleTag from './SingleTag';


const buildNode = (name, ...args) => {
  const singletags = new Set(['hr', 'br', 'img']);
   if (singletags.has(name)) {
    return new SingleTag(name, ...args);
  }
  return new PairedTag(name, ...args);
};
export default buildNode;

/*

buildNode.js

Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа. Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.
PairedTag.js

Реализуйте тип PairedTag со следующим интерфейсом:

    Конструктор, который принимает на вход: name, attributes, body, children.
    Метод toString, который возвращает текстовое представление узла (html) на всю глубину.

SingleTag.js

Реализуйте тип SingleTag со следующим интерфейсом:

    Конструктор, который принимает на вход: name, attributes
    Метод toString, который возвращает текстовое представление узла (html) на всю глубину.

Обратите внимание на то что у SingleTag нет body и children
*/

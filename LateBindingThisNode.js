//Node.js
function attributesAsLine() {
  return Object.entries(this.attributes)
    .map(([key, value]) => ` ${key}="${value}"`)
    .join('');
}

function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;
  this.getAttributesAsLine = attributesAsLine;
}
export default Node;

//PairedTag.js
import Node from './Node'
function str() {
  const value = this.children.length > 0 ? this.children.join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = str;
}

export default PairedTag;
//SingleTag.js
import Node from './Node'
function str() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = str;
}

export default SingleTag;

/*
В этом упражнении реализация наших типов (Node и ее подтипов) будет опираться на следующие свойства js:

    Функция это объект
    Позднее связывание
    Побочные эффекты (apply)
*/

//singletag.js
import Node from './Node';

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
//pairedtag.js
import Node from './Node';

export default function PairedTag(name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

// BEGIN
PairedTag.prototype = Object.create(Node.prototype);
// END

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ? this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};
//node.js
export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
};

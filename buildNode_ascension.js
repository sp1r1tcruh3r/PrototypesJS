//singleTag.js
import Node from './Node'
class SingleTag extends Node {
  constructor(name, attributes = {}) {
    super(name,attributes)
  }

  toString() {
    return `<${this.getName()}${this.getAttributesAsLine()}>`;
  }

};
export default SingleTag;
//pairedTag.js
import Node from './Node'
class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ? this.children.join('') : this.body;
    return `<${this.getName()}${this.getAttributesAsLine()}>${value}</${this.getName()}>`;
  }

};
export default PairedTag;
//node.js
class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  };
  getName(){
    return this.name;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
  }
};
export default Node;

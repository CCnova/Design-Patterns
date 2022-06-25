/**
 * A composite allows to treat elements of different types from the same tree
 * in the same manner.
 */

class CatalogGroup {

  constructor(name, composites=[]) {
    this.name = name;
    this.composites = composites;
  }

  get total() {
    return this.composites.reduce((total, nextItem) => total + nextItem.total, 0);
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.composites.forEach(item => item.print());
  }
}

module.exports = CatalogGroup;
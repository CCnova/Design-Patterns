class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  lookInLocalInventory(itemName) {
    const index = this.inventory.map((item) => item.name).indexOf(itemName);
    return this.inventory[index];
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    const item = this.lookInLocalInventory(itemName);
    if (item) {
      return {
        ...item,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? "now" : `${this.deliveryTime} day(s)`,
      };
    }

    return this.next ? this.next.find(itemName) : `We do not carry ${itemName}`;
  }
}

module.exports = Storage;
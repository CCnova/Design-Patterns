class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`${this.name} is notified that ${storeName} has a ${discount}% discount!`);
    }
}

module.exports = Shopper;

enum EOrderTypes {
  Espresso = 'espresso'
}

abstract class CofeeShop {
  createOrder(orderType: string) {
    // create order logic
  }

  // Factory method to be implemented by Subclasses
  abstract createCoffee();
}

class ItalianCoffeeShop extends CofeeShop {
  createCoffee() {
    return new ItalianEspresso()
  }
}

class AmericanCoffeeShop extends CofeeShop {
  createCoffee() {
    return new AmericanEspresso()
  }
}


interface ICoffee {
  pourIntoCup(): void;
}

class ItalianEspresso implements ICoffee {
  pourIntoCup(): void { }
}

class AmericanEspresso implements ICoffee {
  pourIntoCup(): void { }
}

function clientCode(coffeeShop: CofeeShop) {
  coffeeShop.createOrder(EOrderTypes.Espresso) // The coffeeShop can be italian or american
}

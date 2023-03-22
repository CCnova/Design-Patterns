interface IProduct {
  doStuff: () => void;
}

class ConcreteProductA implements IProduct {
  doStuff() {
    console.log('Doing stuff inside ConcreteProductA')
  }
}

class ConcreteProductB implements IProduct {
  doStuff() {
    console.log('Doing stuff inside ConcreteProductB')
  }
}

abstract class Creator {
  public abstract createProduct(): IProduct;
}

class ConcreteProductACreator extends Creator {
  public createProduct(): IProduct {
    return new ConcreteProductA()
  }
}

class ConcreteProductBCreator extends Creator {
  public createProduct(): IProduct {
    return new ConcreteProductB()
  }
}

function clientCode(creator: Creator) {
  const product = creator.createProduct();
}


interface IChair {
  hasLegs(): void;
  sitOn(): void;
}

// Concrete Implementation
class VictorianChair implements IChair {
  hasLegs() { }
  sitOn() { }
  toString() {
    return `I am a VictorianChair`
  }
}

// Concrete Implementation
class ModernChair implements IChair {
  hasLegs() { }
  sitOn() { }
  toString() {
    return `I am a ModernChair`
  }
}

interface ISofa {
  hasCushion(): void
  lieOn(): void
}

// Concrete Implementation
class VictorianSofa implements ISofa {
  hasCushion(): void { }
  lieOn(): void { }

  toString() {
    return `I am a VictorianSofa`
  }
}

// Concrete Implementation
class ModernSofa implements ISofa {
  hasCushion(): void { }
  lieOn(): void { }
  toString() {
    return `I am a ModernSofa`
  }
}

interface IAbstractFurnitureFactory {
  createChair(): IChair;
  createSofa(): ISofa;
}

// ConcreteFactory1
class VictorianFactory implements IAbstractFurnitureFactory {
  createChair(): IChair {
    return new VictorianChair()
  }

  createSofa(): ISofa {
    return new VictorianSofa()
  }
}

// ConcreteFactory2
class ModernFactory implements IAbstractFurnitureFactory {
  createChair(): IChair {
    return new ModernChair()
  }

  createSofa(): ISofa {
    return new ModernSofa()
  }
}

function clientCode(furnitureFactory: IAbstractFurnitureFactory) {
  const chair = furnitureFactory.createChair();
  const sofa = furnitureFactory.createSofa();
  console.log(`${chair}`)
  console.log(`${sofa}`)
}

const victorianFactory = new VictorianFactory()
const modernFactory = new ModernFactory()

clientCode(victorianFactory)
clientCode(modernFactory)

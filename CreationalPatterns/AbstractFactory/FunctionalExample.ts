interface IChair {
  hasLegs(): void;
  sitOn(): void;
}

interface ISofa {
  hasCushion(): void;
  lieOn(): void;
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

interface IFurnitureFactory {
  createChair: () => IChair;
  createSofa: () => ISofa;
}

const modernFactory: IFurnitureFactory = {
  createChair: () => new ModernChair(),
  createSofa: () => new ModernSofa()
}

const victorianFactory: IFurnitureFactory = {
  createChair: () => new VictorianChair(),
  createSofa: () => new VictorianSofa()
}

function createFactory(type: string) {
  switch (type) {
    case 'Victorian':
      return victorianFactory
    case 'Modern':
      return modernFactory
    default:
      return new Error('Invalid factory type')
  }
}


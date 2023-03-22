
interface IProduct {
  name: string;
  price: number;
}

class Product implements IProduct {
  name: string;
  price: number

  constructor(name: string, price: number, type: string) {
    this.name = `${name} Type ${type}`;
    this.price = price;
  }

  toString() {
    return `name=${this.name} price=${this.price}`
  }
}

type ProductCreatorFn = (name: string, price: number) => IProduct;

const createProductA: ProductCreatorFn = (name, price) => new Product(name, price, 'A')
const createProductB: ProductCreatorFn = (name, price) => new Product(name, price, 'B')

// Factory Method
function createProduct(type: string): ProductCreatorFn | Error {
  switch (type) {
    case 'A':
      return createProductA;
    case 'B':
      return createProductB;
    default:
      return new Error(`Invalid product type ${type}`)
  }
}

const productAFactory = createProduct('A') as ProductCreatorFn; // Ignoring the error
const productBFactory = createProduct('B') as ProductCreatorFn; // Ignoring the error

function clientCode(createNewProduct: ProductCreatorFn) {
  const product = createNewProduct("I don't know the type of the product", 20);
  console.log(`${product}`)
}

clientCode(productAFactory)
clientCode(productBFactory)

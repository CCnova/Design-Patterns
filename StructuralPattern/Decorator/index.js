const Shopper = require("./Shopper");
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem,
} = require("./InventoryItem");

const alex = new Shopper("Alex", 15000);

const walkman = new InventoryItem("Walkman", 29.99);
const neclace = new InventoryItem("Necklace", 9.99);

const goldNeclace = new GoldenInventoryItem(neclace);
const diamondGoldNeclace = new DiamondInventoryItem(goldNeclace);

const diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(diamondGoldNeclace);
alex.purchase(diamondWalkman);

alex.printStatus();

diamondWalkman.print();

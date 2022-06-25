const { userFactory } = require("./userFactory");

const alex = userFactory({ name: "Alex Banks", money: 100 });
const eve = userFactory({
  name: "Eve Porcello",
  money: 100,
  type: "employee",
  employer: "This and That",
});

console.log(alex.toString());
console.log(eve.toString());
const Employee = require("./Employee");
const Shopper = require("./Shopper");

const userFactory = ({ name, money = 0, type, employer }) => {
  return type === "employee"
    ? new Employee(name, money, employer)
    : new Shopper(name, money);
};

module.exports = {
  userFactory
}

const fs = require('fs');

class LocalStorage {

  constructor() {
    this.items = {};
    if (fs.existsSync('./localStorage.json')) {
      console.log('Loading localStorage from file...');
      this.items = JSON.parse(fs.readFileSync('./localStorage.json'));
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    fs.writeFile('./localStorage.json', JSON.stringify(this.items), (err) => {
      if (err) console.error(err);
    });
  }

  clear() {
    this.items = {};
    fs.unlink('./localStorage.json', (err) => {
      if (err) console.error(err);
      console.log('The file has been deleted!');
    });
  }

}

module.exports = new LocalStorage();
const path = require('path');
const fs = require('fs');

class LogStrategy {

  static noDate(timestamp, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    const fileName = path.join(__dirname, 'logs.txt');
    fs.appendFile(fileName, `${timestamp} - ${message}\n`, error => {
      if (error) {
        console.log('Error writing to file');
        console.error(error);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static none() {}
}

module.exports = LogStrategy;
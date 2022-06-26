const fs = require('fs');
const path = require('path');

class ExitCommand {

  get name() {
    return 'exit... bye!';
  }

  execute() {
    process.exit(0);
  }

}

class CreateCommand {

  constructor(fileName, text) {
    this.fileName = fileName;
    this.body = text;
    this.fullPath = path.join(__dirname, fileName);
  }

  get name() {
    return `create ${this.fileName}`;
  }

  execute() {
    fs.writeFile(this.fullPath, this.body, f => f);
  }

  undo() {
    fs.unlink(this.fullPath, f => f);
  }
}

module.exports = {
  ExitCommand,
  CreateCommand,
}
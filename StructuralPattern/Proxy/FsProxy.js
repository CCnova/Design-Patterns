/**
 * The proxy must have the same interface as the object we are applying the proxy.
 * As this is a proxy for the file system module, it should have all the methods
 * of the file system module. A solution to this problem is to clone the module,
 * and just override the methods that we need to change.
 */


class FsProxy {

  constructor(subject) {
    this.fs = subject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/))
      return callback(new Error('Can only read Markdown files'));

    this.fs.readFile(path, format, (error, content) => {
      if (error) return callback(error);
      return callback(null, content);
    });
  }

}

module.exports = FsProxy;
/**
  * ------------------ Example 2 ------------------------------------
  * */

  /** 
    * Things that are being created
    * */
interface IButton {
  render: () => void;
  onClick: () => void;
}

class WindowsButton implements IButton {
  render() {}
  onClick() {}
}

class HTMLButton implements IButton {
  render() {}
  onClick() {}
}
  /** 
    * Things that are being created
    * */

abstract class Dialog {
  public render() {
    const okBtn = this.createButton();
    okBtn.render();
  }

  abstract createButton(): IButton
}

class WindowsDialog extends Dialog {
  createButton(): IButton {
      return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton(): IButton {
    return new HTMLButton();
  }
}

function clientCode(dialog: Dialog) {
  dialog.render();
}

clientCode(new WindowsDialog()) // I can pass Any dialog

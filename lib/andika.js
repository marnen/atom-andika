'use babel';

import AndikaView from './andika-view';
import { CompositeDisposable } from 'atom';

export default {

  andikaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.andikaView = new AndikaView(state.andikaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.andikaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'andika:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.andikaView.destroy();
  },

  serialize() {
    return {
      andikaViewState: this.andikaView.serialize()
    };
  },

  toggle() {
    console.log('Andika was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};

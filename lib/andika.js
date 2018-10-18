'use babel'

// TODO: remove commented-out code when we determine that we don't need it

let disposables = null
let fontStylesheetDisposable = null

export let {config} = require('./config.coffee');

export function activate() {
  const { CompositeDisposable } = require('atom')
  disposables = new CompositeDisposable()

  // apply CSS exceptions when atom is ready
  applyDisabledScopes()

  // apply exceptions when config changes
  // after config changes measurements are already triggered by atom
  disposables.add(
    atom.config.onDidChange('andika.disabledScopes', applyDisabledScopes),
  )
  //
  // // give chromium some time to load the fonts
  // // then trigger measurements
  // setTimeout(triggerMeasurements, 500)
  //
  // if (document.querySelector('fonts-fixer') === null) {
  //   disposables.add(addFixerElement())
  // }
}

export function deactivate() {
  if (disposables) disposables.dispose()
  if (fontStylesheetDisposable) fontStylesheetDisposable.dispose()
  disposables = null
  fontStylesheetDisposable = null
}

// function triggerMeasurements() {
//   atom.workspace.increaseFontSize()
//   atom.workspace.decreaseFontSize()
// }

function applyDisabledScopes() {
//   const font =
//     `'${atom.config.get('andika.fontFamily')}', ` +
//     atom.config.get('andika.secondaryFonts')
  const {disabledScopes} = atom.config.get('andika');


  // NOTE: since `sourcePath` is specified, there is no need to
  // dispose of fontStylesheetDisposable here, the same style element
  // will be updated, and the newly-returned disposable will be
  // exactly the same functionally as the old one.
  fontStylesheetDisposable = atom.styles.addStyleSheet(
    `atom-text-editor ${disabledScopes} {font-family: var(--editor-font-family)}`,
    {sourcePath: 'andika-package-disabled-scopes'},
  )
//
//   triggerMeasurements()
}

// function addFixerElement() {
//   // create a fixer element that forces chrome to load font styles
//   // contains *r*egular, *b*old, *i*talic and i in b
//   const fixer = document.createElement('fonts-fixer')
//   fixer.innerHTML = 'regular<b>bold<i>italic</i></b><i>italic</i>'
//   atom.views.getView(atom.workspace).appendChild(fixer)
//   const { Disposable } = require('atom')
//   return new Disposable(function() {
//     fixer.remove()
//   })
// }

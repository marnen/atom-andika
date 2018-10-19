'use babel'

// TODO: remove commented-out code when we determine that we don't need it

let disposables = null
let fontStylesheetDisposable = null

export let {config} = require('./config.coffee');

export function activate() {
  const { CompositeDisposable } = require('atom')
  disposables = new CompositeDisposable()

  // apply extra CSS when Atom is ready
  applyMonospaceScopes()
  applyFontFeatures()

  // apply exceptions when config changes
  // after config changes measurements are already triggered by atom
  disposables.add(
    atom.config.onDidChange('andika.monospace', applyMonospaceScopes),
    atom.config.onDidChange('andika.fontFeatures', applyFontFeatures)
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

function applyFontFeatures() {
  const nameMappings = {
    doubleStoreyAG: 'ss01',
    slashed0: 'cv10',
    straightT: 'cv56'
  }
  const {fontFeatures} = atom.config.get('andika');
  const cssFeatures = {};
  for (name in fontFeatures) {
    cssFeatures[nameMappings[name]] = fontFeatures[name] ? 1 : 0
  }
  const featureArray = [];
  for (feature in cssFeatures) {
    featureArray.push(`"${feature}" ${cssFeatures[feature]}`)
  }
  atom.styles.addStyleSheet(
    `atom-text-editor {-webkit-font-feature-settings: ${featureArray.join(', ')}}`,
    {sourcePath: 'andika-font-features'}
  )
}

function applyMonospaceScopes() {
//   const font =
//     `'${atom.config.get('andika.fontFamily')}', ` +
//     atom.config.get('andika.secondaryFonts')
  const {monospace: {scopes, fontSizePercent}} = atom.config.get('andika');

  // NOTE: since `sourcePath` is specified, there is no need to
  // dispose of fontStylesheetDisposable here, the same style element
  // will be updated, and the newly-returned disposable will be
  // exactly the same functionally as the old one.
  fontStylesheetDisposable = atom.styles.addStyleSheet(
    `atom-text-editor ${scopes} {font-family: var(--editor-font-family); font-size: ${fontSizePercent}%;}`,
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

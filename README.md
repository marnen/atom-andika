# Andika

This package makes it easier to use the lovely [Andika](https://software.sil.org/andika) font with Atom. Andika is a _proportionally spaced_ font developed by [SIL International](https://www.sil.org/), with a design that takes the needs of beginning readers into account by disambiguating similar letterforms. This also makes it nice for reading source code!

![[Screenshot of code in Andika font]](code.png)

In addition, Andika contains [many OpenType features](https://software.sil.org/wp-content/uploads/sites/19/2015/12/Andika-features5.000.pdf) to customize the look of the font, and this package's settings pane provides access to some of those features.

Screenshots coming soon!

## Usage

Install the Andika package. This will automatically install the font and set it in your editor. You can use it as is, or customize it further in the settings pane.

## Customization

All customization is done in the package's settings pane.

### Monospace

Andika is a proportionally spaced font, and so it won't work well in space-aligned tabular contexts. Therefore, the package will use the (presumably monospaced) font you've chosen in your editor preferences for these contexts. You can choose which scopes are displayed in monospace, as well as the size of the monospaced font.

### Font Features

Through the magic of OpenType, Andika allows you to tweak the appearance of many letters and digits. The Font Features properties in the settings pane control these parameters.

## License

Andika is distributed under the SIL Open Font License 1.1, which can be found at resources/Andika-5.000/OFL.txt in this repository or at https://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web. More information is availabe at https://scripts.sil.org/OFL.

The package as a whole is distributed under the [MIT License](https://opensource.org/licenses/MIT), as seen at LICENSE.md. Portions of it are based on the wonderful [Atom fonts package](https://github.com/braver/fonts) by Koen Lageveen.

# Lingua

## Typography for multilingual sites

Rapidly develop a fully internationalized site without sacrificing aesthetics, accessibility or performance.

- **Performance.** We use variable fonts (wherever available), which reference one font file for every weight dramatiacally reducing page-load times. Here are some [stats](https://css-tricks) on variable font load times. There is also an option to load fonts from the Google CDN (where available), or from your own server.

We also the `unicode-range` property in our `@font-face` rules so language-specific files are only loaded when glyphs used by that language are called for. See [this article](https://css-tricks.com/almanac/properties/u/unicode-range/)for more.

- **Design.** Most scripts are are available in 9 weights from thin to black, and the variable fonts can be set at 800 weights and 40 widths. Each of these has automatically generated fallbacks and a range of variables, mixins, and default helper classes to style anything you want.

- **Variable fonts.** Lingua uses the variable fonts currently available in the Noto set (see the languages file for a full list). the only scripts currently *not* available as variable fonts are the CJK fonts and Gujarati. Those are provided in regular and bold weights, but others can easily be added.

- **Once for all.** Using the `:lang` property, lingua will try to automatically provide the *most specific* script for each language. CSS attributes, including variable font attributes, can be declared once for all scripts, or customized per script.

### The Noto fonts

Google has developed the Noto set of font families with the ambitious goal of covering every language and script in Unicode. Because Noto fonts are designed to work together, you don't have to reconcile differences in character size, cap height, weight, or other stylistic variations that plague internationalization.

A goal of this project is to make it easy to swap out individual scripts, or an entire internationalized font-set, for another. Since it's now possible for type foundaries to use Noto as a blueprint for building their own fully internationalized fonts, it's inevitable that more fonts (both static and varaiable) that cover more Unicode blocks will become available.  

### Don't like the Noto fonts?

If Noto doesn't work for your brand or design, use Lingua can fill in the gaps. Say your brand font only covers the Latin unicode blocks, just replace Noto with your font for those blocks and let Lingua cover the other half of the world.

### How to use Lingua

1. **Out of the box** To use lingua as is just add link the minified css in the `<head>` of your HTML at the end of your other style references. That will style every language on your site for which Lingua has a font. From there you can add the Lingua helper classes wherever you need to make additional adjustments.

2. **With Sass** Clone the Lingua repo into your project and either `@import` Lingua's style.scss into your scss build flow or compile it separately and link the styles as in #1 above.

<!--3. **With NPM** Get the NPM module `npm i lingua-sass`, or yarn add lingua-sass. Then you can import the module into your build.-->

### Scripts covered by Lingua

Latin, Greek, Cyrillic, CJK, Arabic, Devanagari, Ethiopic, Hebrew, Khmer, Adlam, Armenian, Bamum, Bengali, Gujarati, Kannada, Khmer, Lao, Malayalam, Telugu, Thaana, Thai

### Coming soon

Gurmukhi, Tibetan, Hangul jamo, Limbu, NKo, Oriya, Sinhala, Tai le

Ancient and invented scripts are not currently on the roadmap but feel free to contribute them!

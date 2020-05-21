# Lingua

## A typographic solution for every language and script

Leveraging the open-source Noto font families, variable web-fonts and modern front-end build tools, Lingua provides a single library to rapidly develop a fully internationalized site without sacrificing design, accessibility or performance.

### The Noto fonts

Google has developed a set of font families with the ambitious goal of covering every language and script in Unicode. That alone is a compelling reason to use them, but there's more. Because all of the noto fonts are built to work together, you don't have to reconcile differences in character size, cap height, weight, or other stylistic variations that plague i18n projects.

Google intends to releas the master for all of the Noto fonts and when they do it should be possible for any type foundary to use that master as a starting point to extend their own fonts to cover the scripts Noto covers. One of the goals of this project is to make it easy for developers to swap out individual fonts, or the entire Noto set, once more fully internationalizes fonts are available.

- **Accessibility.** The Noto fonts have been tested for accessibility and perform extremely well.

- **Performance.** We usee variable fonts (wherever available), which reference one font file for every weight dramatiacally reducing page-load times. Here are some [stats](https://css-tricks) on variable font load times.

We also the `unicode-range` property in our `@font-face` rules so language-specific files are only loaded when glyphs used by that language are called for. See [this article](https://css-tricks.com/almanac/properties/u/unicode-range/)for more.

- **Design.** Every font and script provided by Lingua is available as both serif and sans. Most are available in 9 weights from thin to black, and the variable fonts can be set at 800 weights and 40 widths. Each of these has automatically generated fallbacks and a range of variables, mixins, and default helper classes to style anything you want.

- **Once for all.** By default Lingua will attempt to automatically provide the right script for each language. We do this by using the `:lang` pseudoclass to load the font for the *most specific* script specified by at the document or element level. CSS attributes, including variable font attributes, can be declared once for all scripts, or customized per script.

For languages that can be rendered in multiple scripts, the default will be the original script for that language, with an option to change the script by uncommenting lines in the multi-script files. For the four largest groups of languages that share scripts, Latin, Arabic, Cyrillic, and Devanagari, the default order of precedence for those scripts is D,A,C,L.

- **Variable fonts.** Lingua uses the variable fonts currently available in the Noto set (see the languages file for a full list). the only scripts currently *not* available as variable fonts are the CJK fonts and Gujarati. Those are provided in regular and bold weights, but others can easily be added.

### But what if I don't like the Noto fonts?

If Noto doesn't work for your brand or design, use Lingua can fill in the gaps. Say your brand font only covers the Latin unicode blocks, just replace Noto with your font for those blocks and let Lingua cover the other half of the world.

### How to use Lingua

1. **Out of the box** To use lingua as is just add link the minified css in the `<head>` of your HTML after all of your other css files. That will style every language on your site with the noto web fonts. From there you can add the Lingua helper classes wherever you need to make additional adjustments.

2. **With Sass** Clone the Lingua repo into your project and either `@import` Lingua's style.scss into your scss build flow or compile it separately and link the styles as in #1 above.

3. **With NPM** Get the NPM module `npm i lingua-sass`, or yarn add lingua-sass. Then you can import the module into your build.

### Languages and scripts covered by Lingua

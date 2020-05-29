# Lingua

## Typography for multilingual sites

Rapidly develop a fully internationalized site without sacrificing aesthetics, accessibility or performance.

### Design centric

Fonts can be configured easily for at a wide variety of weights and widths. Each script has language-specific fallbacks and a range of variables, mixins, and default helper classes to style anything you want.

### Variable fonts

Lingua uses the variable fonts currently available in the Noto set (see `script-selectors.scss`). The only exceptions are the CJK fonts and Gujarati. Those are provided as individual files per weight, and can be easily configured to load only the ones you want.

### Once for all

Out-of-the-box, Lingua will provide attractive, performant font support for the languages and scripts of 99.8% of the world's population. Using the `:lang` property, lingua will default to the *most specific* script for each language. Any font loading based on `:lang` can be easily configured for your unique region or audience, you can custom-configure any of the scripts as well. CSS properties including variable font attributes, can be also customized per script.

### Performance

We use variable fonts (wherever available), which reference one font file for every weight and can reduce page-load times. Here are some [stats](https://css-tricks) on variable font load times. There is also an option to load fonts from the Google CDN (where available), or from your own server.

We also use the `unicode-range` property to subset `@font-face` rules so fonts are only loaded when glyphs used by unicode block are called for. See [this article](https://css-tricks.com/almanac/properties/u/unicode-range/)for more.

### The Noto fonts

Google has developed the Noto set of font families with the ambitious goal of covering every language and script in Unicode. Because Noto fonts are designed to work together, you don't have to reconcile differences in character size, cap height, weight, or other stylistic variations that plague internationalization.

A goal of this project is to make it easy to swap out individual scripts, or an entire internationalized font-set, for another. Since it's now possible for type foundaries to use Noto as a blueprint for building their own fully internationalized fonts, it's inevitable that more fonts (both static and varaiable) that cover more Unicode blocks will become available.  

### Don't like the Noto fonts?

If Noto doesn't work for your brand or design, use Lingua can fill in the gaps. Say your brand font only covers the Latin unicode blocks, just replace Noto with your font for those blocks and let the Lingua defaults cover the rest of the world.

### How to use Lingua

#### 1. Out of the box

To use lingua as is, just link the minified css in the `<head>` of your HTML after your other style references. That will style every language on your site for which Lingua has a font loading the noto fonts from the Google CDN. From there you can add the Lingua helper classes wherever you need to make additional adjustments.

#### 2. In your build

Clone the Lingua repo into your project and either `@import` Lingua's style.scss into your scss build flow or compile it separately. Using Lingua this way you can configure Lingua as you wish. Options include choosing weights and widths, serving fonts yourself or loading from the CDN, turning sprecific scripts on or off, or overriding the default script for any language.

<!--3. **With NPM** Get the NPM module `npm i lingua-sass`, or yarn add lingua-sass. Then you can import the module into your build.-->

### Scripts covered by Lingua

Latin, Greek, Cyrillic, CJK, Arabic, Devanagari, Ethiopic, Hebrew, Khmer, Adlam, Armenian, Bamum, Bengali, Gujarati, Kannada, Khmer, Lao, Malayalam, Telugu, Thaana, Thai

### Coming soon

Gurmukhi, Tibetan, Hangul jamo, Limbu, NKo, Oriya, Sinhala, Tai le

Ancient and invented scripts are not currently on the roadmap but feel free to contribute them!

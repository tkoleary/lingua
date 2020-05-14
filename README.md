# lingua

## A typographic solution for every language and script

Leveraging the open-source Noto font families, variable web-fonts and modern front-end build tools, lingua provides a single library to rapidly develop a fully internationalized site without sacrificing design, accessibility or performance.

### The Noto fonts

Google has developed an amazing resource. A set of font families with the ambitious goal of covering every single language and script covered by the Unicode standard. That alone is a compelling reason to use them, but there's more. Because all of the noto fonts are built together you don't have to deal with reconciling the differences in character size, X and cap height or weight that make a multi-font approach painful.

### Accessibility
The Noto fonts have been tested for accessibility and perform extremely well.

### Performance
Because Lingua uses variable fonts (wherever available) and only imports the fonts you need based on languages on the page, it's unlikely that you will ever load more than a few font files to any page. Here are some stats on variable font load times.

### Design
Every font and script provided by Lingua is available as both serif and sans. Most are available in 9 weights from thin to black, and the variable fonts can be set at 800 weights and 40 widths. Each of these has automatically generated fallbacks and a range of variables, mixins, and default helper classes to style anything you want.

  #### Design once for all scripts.
  When Lingua is added to your project any font anywhere automatically use the correct script for the language specified by the document or element inheriting whatever style attributes (width, weight, style etc.) applied by your css.

  Lingua uses the variable fonts currently available in the Noto set which include the following scripts: Latin, Greek, Cyrillic, Armenian, Georgian, Hebrew, Arabic, Khmer, Tegulu, Malayalam, Hindi, Urdu.

### How to use Lingua

  #### 1. Out of the box
  To use lingua as is just add link the minified css in <head> after all of your other css files. That will style every language on your site with the noto web fonts. From there you can add the Lingua helper classes wherever you need to make additional adjustments.

  #### With Sass
  Clone the Lingua repo into your project and either @import Lingua's style.scss into your scss build flow or compile it separately and link the styles as in #1 above.

  #### With NPM
  Get the NPM module npm i lingua-sass, or yarn add lingua-sass. Then you can import the module into your build.

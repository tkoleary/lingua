## About

### Simple

Out-of-the-box, Lingua will load fonts for the languages and scripts of 99.8% of the world's population. Just add Lingua to your site, and wherever a language code exists in your HTML, the correct webfont will be loaded for that element. Only the fonts and characters that are actually used on the page will be loaded.

### Design centric

Once you have the fonts, you can style them globally, in the Lingua config file, or individually with easy-to-remember helper classes like `lf-sans`, which will load the sans version for _any_ script. There are also classes for width and weight like `lf-ulight` (ultra-light, weight 100), or `lf-sbold` (semi-bold, weight 600).

For example the following code in Oriya:

```HTML
<blockquote class="lf-sans" lang="or">
	<h1 class="lf-ulight"> ଆର୍ଟିକିଲ୍ 1</h1>
	<h3 class="lf-sbold"> ସମସ୍ତ ଲୋକ ମୁକ୍ତ ଏବଂ ସମ୍ମାନ ଏବଂ ଅଧିକାରରେ ସମାନ ଭାବରେ ଜନ୍ମଗ୍ରହଣ କରନ୍ତି | </h3>
</blockquote>
```

Will render as:*

> <h1 class="lf-sans lf-ulight" lang="or">ଆର୍ଟିକିଲ୍ 1</h1>
> <h3 class="lf-serif lf-sbold" lang="or">ସମସ୍ତ ଲୋକ ମୁକ୍ତ ଏବଂ ସମ୍ମାନ ଏବଂ ଅଧିକାରରେ ସମାନ ଭାବରେ ଜନ୍ମଗ୍ରହଣ କରନ୍ତି | </h3>


### Variable fonts

Variable fonts are exploding in popularity since they provide designers so much more flexibility to specify things weight, width, and slant with extreme precision. Lingua uses variable fonts for scripts where they are availailable (see `script-selectors.scss`). We load tham with  `@supports`, falling back to static fonts for older browsers. A major exception is CJK fonts (Chinese, Japanese, Korean), for which there are no variable fonts available.

### Performance

Lingua includes [subfont](https://www.npmjs.com/package/subfont) as an optional dependency to create subsets of characters based on the actual content of your pages. We use the 'fout with a class' loading strategy described by Zach Leatherman [here](https://www.zachleat.com/web/comprehensive-webfonts/). The use of variable fonts also reduces page-load times, especially if you use several weights of one font, each of which would need to be loaded as a separate file with non-variable fonts. Here are some [stats](https://css-tricks) on variable font load times.

We use the `unicode-range` property to subset `@font-face` rules so fonts are only loaded when glyphs used by unicode block are called for. See [this article](https://css-tricks.com/almanac/properties/u/unicode-range/) for more.

### Browser coverage

We take a progressive enhancement approach to fallbacks. For variable fonts our `@font-face` rules only include woff and/or woff2 since all browsers that support variable fonts also support woff2. For the static fallback fonts we include eot (using iefix), woff, and woff2 which means webfonts are supported back to IE8. For even older browsers, we provide the fallback unifont—which contains bitmaps of all of unicode glyphs—as .ttf, and .svg so all characters in any script should still render regardless of the device.

### The fonts

Google has developed the Noto set of font families with the ambitious goal of covering every language and script in Unicode. Because Noto fonts are designed to work together, you don't have to reconcile differences in character size, cap height, weight, or other stylistic variations that plague internationalization.

A goal of this project is to make it easy to swap out individual scripts, or an entire internationalized font-set, for another. Since it's now possible for type foundaries to use Noto as a blueprint for building their own fully internationalized fonts, it's inevitable that more fonts (both static and varaiable) that cover more Unicode blocks will become available.  

### Don't like the fonts?

If Noto doesn't work for your brand or design, use Lingua can fill in the gaps. Say your brand font only covers the Latin unicode blocks, just replace Noto with your font for those blocks and let the Lingua defaults cover the rest of the world.

_*Where variable fonts are supported_

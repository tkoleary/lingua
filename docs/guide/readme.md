## About

### Simple

Out-of-the-box, Lingua will load webfonts for the languages and scripts of 99.8% of the world's population (45 scripts and 780 languages). Add Lingua to your site, and wherever a language code exists in your HTML, the correct webfont will be loaded for that text. Only the fonts and characters that are actually used on the page will be loaded.

### Design centric

By default Lingua styles all scripts with the default weight, but we also include easy-to-remember helper classes, for example `lf-sans`, which will apply the sans version for _any_ script. We have classes for both width and weight like `lf-ulight` (ultra-light, weight 100), or `lf-condensed` (width 80), and mixins to build your own custom classes like `lf-ulight-xcondensed`, or `lf-xlight-[your custom variable]`. We even have unique classes for outlier font variants and styles some scripts provide like `lf-unjoined`, `lf-slanted`, `lf-kufi`, etc.

The following code using Oriya script:

```HTML
<blockquote class="lf-sans" lang="or">
	<h1 class="lf-xlight"> ଆର୍ଟିକିଲ୍ 1</h1>
	<h3 class="lf-medium"> ସମସ୍ତ ଲୋକ ମୁକ୍ତ ଏବଂ ସମ୍ମାନ ଏବଂ ଅଧିକାରରେ ସମାନ ଭାବରେ ଜନ୍ମଗ୍ରହଣ କରନ୍ତି | </h3>
</blockquote>
```

Will render as:*

> <h1 class="lf-sans lf-xlight" lang="or">ଆର୍ଟିକିଲ୍ 1</h1>
> <h3 class="lf-serif lf-medium" lang="or">ସମସ୍ତ ଲୋକ ମୁକ୍ତ ଏବଂ ସମ୍ମାନ ଏବଂ ଅଧିକାରରେ ସମାନ ଭାବରେ ଜନ୍ମଗ୍ରହଣ କରନ୍ତି | </h3>


### Variable fonts

Variable fonts are exploding in popularity since they provide designers so much more flexibility to specify weight, width, slant or other characteristics with extreme precision. Lingua uses variable fonts for scripts wherever they are available, falling back to static fonts for older browsers. A major exception is CJK fonts (Chinese, Japanese, Korean), for which there are no variable fonts available due to the sheer size of those character sets.

### Performance

Lingua includes [subfont](https://www.npmjs.com/package/subfont) as an optional dependency to create subsets of characters based on the actual content of your pages. We use the 'fout with a class' loading strategy described by Zach Leatherman [here](https://www.zachleat.com/web/comprehensive-webfonts/). The use of variable fonts also reduces page-load times, especially if you use several weights of one font, each of which would need to be loaded as a separate file with non-variable fonts. Here are some [stats](https://css-tricks) on variable font load times.

All of the default fonts (the Noto families) are compresssed and subsetted using Glyphhanger. We also add the `unicode-range` property to subset the `@font-face` rules so fonts are only loaded when glyphs used by unicode that block are called for. See [this article](https://css-tricks.com/almanac/properties/u/unicode-range/) for more.

### Browser coverage

By default our `@font-face` rules only include woff and woff2 files which support browsers back to IE10. If you need to support browsers back to IE8 you can generate all the EOT files to do that in Lingua's sister project [Webfont Factory](https://github.com/tkoleary/webfont-factory).

### The Noto fonts

By default Lingua uses the fantastic open-source Noto fonts from Google. Because Noto fonts are designed to work together, you don't have to reconcile differences in character size, cap height, weight, or other stylistic variations that plague internationalization. If Noto is not stylistically appropriate for your brand you can replace some or all of the scripts with your preferred fonts in the variables files.

replace Noto with your font for those blocks and let the Noto fonts cover the rest of the world. If you don't already have webfont files for the fonts you want, use our sister project [Webfont Factory](https://github.com/tkoleary/webfont-factory) to generate compressed and subsetted woff, woff2, eot, and `@font-face` rules from your ttf files.

_*Where variable fonts are supported_

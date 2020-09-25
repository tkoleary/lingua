---
title: Add your own fonts
lang: en
---

# Add fonts with variables

### Script variables

If Noto is not stylistically appropriate for your brand you can replace some or all of the scripts with your preferred fonts in the variables files. For example if you want to replace the Noto Sans fonts for Latin with Source Sans Pro:

```scss
// First replace this...
$latin-sans: 'Noto Sans Latin';   // Static, VF

// With this...
$latin-sans: 'Source Sans Latin'; // Static, VF
````

Next add your webfont rules, make sure your static and variable fonts have the same 'font-family' name and that the static fallback is first:

```scss
@font-face {
	font-family: 'Source Sans Pro';
	src: url('#{$font-path}SourceSansPro-regular-subset.woff2') format('woff2'),
	     url('#{$font-path}SourceSansPro-regular-subset.woff') format('woff');
	font-style: normal;
	font-weight: normal;
	font-display: $font-display;
}

@font-face {
	font-family: 'Source Sans Pro';
	src: url('#{$font-path}SourceSansPro-VF-subset.woff2') format('woff2'),
	     url('#{$font-path}SourceSansPro-VF-subset.woff') format('woff');
	font-style: normal;
	font-weight: normal;
	font-display: $font-display;
}
````

Finally, put your webfonts in the 'fonts' folder:

```
└─ lingua
	├─ lingua.css
	└─ fonts
		└─ SourceSansPro-regular-subset.woff2
		└─ SourceSansPro-regular-subset.woff
		└─ SourceSansPro-VF-subset.woff2
		└─ SourceSansPro-VF-subset.woff
```

Compressed and subsetted font files are recommended but not required. If you don't already have compresssed and subsetted files for the fonts you want, use our sister project [Webfont Factory](https://github.com/tkoleary/webfont-factory) to generate compressed and subsetted woff, woff2, etc. and `@font-face` rules from your ttf files.

<!--3. **With NPM** Get the NPM module `npm i lingua-sass`, or yarn add lingua-sass. Then you can import the module into your build.-->

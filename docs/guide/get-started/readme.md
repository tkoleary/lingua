# Get started

*Rapidly develop a fully internationalized site without sacrificing aesthetics, accessibility or performance.*

## Quickstart

Download Lingua, put it in the root of your project and link it in the `<head>` of index.html *after* all of your other style references:

```HTML
<head>
	<link rel="stylesheet" href="css/mystyle.css">
	<link rel="stylesheet" href="lingua/css/lingua.min.css">
</head>
```
And make sure the Fonts folder is in the same folder as the lingua css file.

This will style every language on your site for which Lingua has a font. From there you can add the Lingua helper classes wherever you need to make additional adjustments.

## Custom configured with sass

Clone the Lingua repo into your project and either `@import` Lingua's style.scss into your scss build or compile it separately. Using Lingua this way you can configure Lingua as you wish. Options include choosing weights and widths, turning sprecific scripts on or off, or overriding the default script for any language.

<!--3. **With NPM** Get the NPM module `npm i lingua-sass`, or yarn add lingua-sass. Then you can import the module into your build.-->

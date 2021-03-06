---
title: Get Started
lang: en
---

# Get started

*Rapidly develop a fully internationalized site without sacrificing aesthetics, accessibility or performance.*

## Quickstart

Download Lingua, put it in the root of your project and link it in the `<head>` of index.html *after* all of your other style references:

```HTML
<head>
	`All of your other style sheets`
	<link rel="stylesheet" href="lingua/lingua.min.css">
</head>
```
And make sure the Fonts folder is in the same folder as the lingua css file.

Your project root should look something like this:

```
.
└─ index.html
	└─ lingua
 		├─ lingua.min.css
		└─ fonts
			└─ [the fonts]
```

This will style every language on your site for which Lingua has a font. From there you can add the Lingua helper classes wherever you need to make additional adjustments.

## With sass

Clone the Lingua repo into your project and either `@import` Lingua's style.scss into your scss build or compile it separately. Using Lingua this way you can configure Lingua as you wish. Options include choosing weights and widths, turning sprecific scripts on or off, or overriding the default script for any language.

---
title: Helper Classes
lang: en
---

# Helper Classes

## Style classes

Primary style classes can be combined with secondary but not with one another, eg.:

<code>lf-serif lf-sans</code> will not do anything.

<code>lf-serif lf-italic</code> will display a serif italic font.

<table>
	<thead>
		<tr><th>Primary styles</th><th>Classes</th><th>Coverage</th></tr>
	</thead>
	<tbody>
		<tr><td>Sans-serif </td><td><code>lf-sans </code></td><td>All scripts </td></tr>
		<tr><td>Serif </td><td><code>lf-serif </code></td><td>All scripts except Arabic, Gujariati, Nushu, Tibetan, Chinese (HK), Chinese (S), Sara Sompeng, Chinese (T), Japanese, Korean, Balinese, Brahmi, Takri, NKo, Tagalog, Tai-le, Tai-tham, Tai-viet </td></tr>
		<tr><td>Naskh </td><td><code>lf-naskh </code></td><td>Arabic only </td></tr>
		<tr><td>Kufi </td><td><code>lf-kufi </code></td><td>Arabic only </td></tr>
		<tr><td>Rashi </td><td><code>lf-rashi </code></td><td>Hebrew only </td></tr>
	</tbody>
</table>

<table>
	<thead>
		<tr><th>Secondary</th><th>Classes</th><th>Coverage</th></tr>
	</thead>
	<tbody>
		<tr><td>Monospace </td><td><code>lf-mono </code></td><td>Latin only</td></tr>
		<tr><td>Italic </td><td><code>lf-italic </code></td><td>Latin only</td></tr>
		<tr><td>Slanted </td><td><code>lf-slanted </code></td><td>Tamil only</td></tr>
		<tr><td>Traditional </td><td><code>lf-traditional </code></td><td>Nushu only</td></tr>
	</tbody>
</table>

Even with a primary and a secondary style not all combinations have a corresponding font.


## Weight classes

<table>
	<thead>
		<tr><th>Weights</th><th>Classes</th><th>Coverage</th></tr>
	</thead>
	<tbody>
		<tr><td>weight: 100 </td><td><code>lf-ulight</code></td><td>Variable Fonts only</td></tr>
		<tr><td>weight: 200 </td><td><code>lf-xlight</code></td><td>Variable Fonts only</td></tr>
		<tr><td>weight: 300 </td><td><code>lf-light</code></td><td>Variable Fonts only</td></tr>
		<tr><td>weight: 400 </td><td><code>lf-regular</code></td><td>All</td></tr>
		<tr><td>weight: 500 </td><td><code>lf-medium</code></td><td>Variable Fonts only</td></tr>
		<tr><td>weight: 600 </td><td><code>lf-sbold</code></td><td>Variable Fonts only</td></tr>
		<tr><td>weight: 700 </td><td><code>lf-bold</code></td><td>All</td></tr>
		<tr><td>weight: 800 </td><td><code>lf-xbold</code></td><td>Variable Fonts only</td></tr>
		<tr><td>weight: 900 </td><td><code>lf-ubold</code></td><td>Variable Fonts only</td></tr>
	</tbody>
</table>

## Width classes

<table>
	<thead>
		<tr><th>Widths</th><th>Classes</th><th>Coverage</th></tr>
	</thead>
	<tbody>
		<tr><td>stretch: 60% </td><td><code>lf-ucondensed</code></td><td>Variable Fonts only</td></tr>
		<tr><td>stretch: 70% </td><td><code>lf-xcondensed</code></td><td>Variable Fonts only</td></tr>
		<tr><td>stretch: 80% </td><td><code>lf-ucondensed</code></td><td>Variable Fonts only</td></tr>
		<tr><td>stretch: 90% </td><td><code>lf-narrow</code></td><td>Variable Fonts only</td></tr>
		<tr><td>stretch: 100% </td><td><code>lf-nostretch</code></td><td>All</td></tr>
	</tbody>
</table>

## UI fonts:

<table>
	<thead>
		<tr><th>For</th><th>Classes</th><th>Coverage</th></tr>
	</thead>
	<tbody>
		<tr><td>UI font </td><td><code>lf-sans-ui</code></td><td>UI fonts only</td></tr>
	</tbody>
</table>

Example:

```HTML
<a href="#" class="your-button-class lf-sans-ui lf-medium" lang="Mlym">സ്ക്രിപ്റ്റ് — Malayalam</a>
````
Renders as:

<a href="#" class="lf-ui-sample lf-sans-ui lf-medium" lang="Mlym">സ്ക്രിപ്റ്റ് — Malayalam</a>

Add your webfont rules, make sure your static and variable fonts have the same 'font-family' name and that the static fallback is first:

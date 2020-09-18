---
title: Helper Classes
lang: en
---

# Helper Classes

## Style classes

<table>
	<thead>
		<tr><th>For styles</th><th>Classes</th></tr>
	</thead>
	<tbody>
		<tr><td>Sans-serif </td><td><code>lf-ulight</code></td></tr>
		<tr><td>Serif </td><td><code>lf-xlight</code></td></tr>
		<tr><td>weight: 300 </td><td><code>lf-light</code></td></tr>
		<tr><td>weight: 400 </td><td><code>lf-regular</code></td></tr>
		<tr><td>weight: 500 </td><td><code>lf-medium</code></td></tr>
		<tr><td>weight: 600 </td><td><code>lf-sbold</code></td></tr>
		<tr><td>weight: 700 </td><td><code>lf-bold</code></td></tr>
		<tr><td>weight: 800 </td><td><code>lf-xbold</code></td></tr>
		<tr><td>weight: 900 </td><td><code>lf-ubold</code></td></tr>
	</tbody>
</table>

## Weight classes

<table>
	<thead>
		<tr><th>For weights</th><th>Classes</th></tr>
	</thead>
	<tbody>
		<tr><td>weight: 100 </td><td><code>lf-ulight</code></td></tr>
		<tr><td>weight: 200 </td><td><code>lf-xlight</code></td></tr>
		<tr><td>weight: 300 </td><td><code>lf-light</code></td></tr>
		<tr><td>weight: 400 </td><td><code>lf-regular</code></td></tr>
		<tr><td>weight: 500 </td><td><code>lf-medium</code></td></tr>
		<tr><td>weight: 600 </td><td><code>lf-sbold</code></td></tr>
		<tr><td>weight: 700 </td><td><code>lf-bold</code></td></tr>
		<tr><td>weight: 800 </td><td><code>lf-xbold</code></td></tr>
		<tr><td>weight: 900 </td><td><code>lf-ubold</code></td></tr>
	</tbody>
</table>

## Width classes

<table>
	<thead>
		<tr><th>For widths</th><th>Classes</th></tr>
	</thead>
	<tbody>
		<tr><td>width: 60 </td><td><code>lf-ucondensed</code></td></tr>
		<tr><td>width: 70 </td><td><code>lf-xcondensed</code></td></tr>
		<tr><td>width: 80 </td><td><code>lf-ucondensed</code></td></tr>
		<tr><td>width: 90 </td><td><code>lf-narrow</code></td></tr>
	</tbody>
</table>


## UI fonts:

<table>
	<thead>
		<tr><th>For</th><th>Classes</th></tr>
	</thead>
	<tbody>
		<tr><td>UI font... </td><td><code>lf-sans-ui</code></td></tr>
		<tr><td>and weight: 100 </td><td><code>lf-sans-ui lf-ulight</code></td></tr>
	</tbody>
</table>

Example:

```HTML
<a href="#" class="your-button-class lf-sans-ui lf-medium" lang="Mlym">സ്ക്രിപ്റ്റ് — Malayalam</a>
````
Renders as:

<a href="#" class="lf-ui-sample lf-sans-ui lf-medium" lang="Mlym">സ്ക്രിപ്റ്റ് — Malayalam</a>

Add your webfont rules, make sure your static and variable fonts have the same 'font-family' name and that the static fallback is first:

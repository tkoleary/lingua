---
title: Documentation
lang: en
---

# Global variables

### Global font path

The font path variable is prepended to the url of every file in `webfonts.scss`. If you need to locate fonts in a different place in your environment you can change this variable.

The default value is `"fonts/"`. You can re-configure it to any absolute or relative path, eg.

```scss
$font-path: "assets/fonts/";
```

### Global font display

Use this variable to set a global [font display](https://css-tricks.com/almanac/properties/f/font-display/) property for all webfonts.

The default value is `"swap"`. Options are `"auto", "block", "swap", "fallback", "optional"`, eg.

```scss
$font-display: "fallback";
```

### Global class prefix

Use this variable adds a prefix to classes.

The default value is `"lf-"`, I that conflicts with your class names you can change it, eg.

```scss
$prefix: "myprefix-";
```

*Note: the '.' is not part of the prefix variable.*

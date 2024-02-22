# wsui-vw-rem
> Rem solution based on vw and media query.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/wsui-vw-rem
```

## usage
```scss
@import '~@jswork/wsui-vw-rem';

// based: 750px
// 13.33vw = 100px

// based: 375px
// 13.33vw = 50px

// you can customize options:
$wsui-vw-rem-screen-width: 375px !default;
$wsui-vw-rem-base-font-size: 10px !default;
$wsui-vw-rem-media-list: ( 320, 360, 375, 393, 414, 480, 540, 640, 720, 768 ) !default;

// OR (presets for tailwindcss)
$wsui-vw-rem-screen-width: 375px !default;
$wsui-vw-rem-base-font-size: 16px !default;
```

## resources
- https://3g.163.com/touch/#/
- https://blog.csdn.net/chi1130/article/details/82844489
- https://blog.csdn.net/lishihong108/article/details/52290021

## license
Code released under [the MIT license](https://github.com/afeiship/wsui-vw-rem/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui-vw-rem
[version-url]: https://npmjs.org/package/@jswork/wsui-vw-rem

[license-image]: https://img.shields.io/npm/l/@jswork/wsui-vw-rem
[license-url]: https://github.com/afeiship/wsui-vw-rem/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui-vw-rem
[size-url]: https://github.com/afeiship/wsui-vw-rem/blob/master/dist/wsui-vw-rem.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui-vw-rem
[download-url]: https://www.npmjs.com/package/@jswork/wsui-vw-rem

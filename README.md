# EasyBit

NodeJS library for simple register and bit manipulations.

## Examples

```js
const easybit = require('easybit');

console.log(easybit.set(0x00, 1));
console.log(easybit.set(0xFF, 1));

console.log(easybit.clear(0x00, 1));
console.log(easybit.clear(0xFF, 1));

console.log(easybit.toggle(0x00, 1));
console.log(easybit.toggle(0xFF, 1));
```

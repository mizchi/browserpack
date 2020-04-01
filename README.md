# Browserpack

In browser rollup bundling via `cdn.pika.dev`

## How to use

```
npm install browserpack --save
```

```js
import { compile } from "@mizchi/browserpack";
const files = {
  "/foo.tsx": "export default 1"
  "/index.tsx": "import foo from 'foo';\nconsole.log('hello', foo)";
};
const bundle = await compile({
  useInMemory: true,
  files,
  input: "/index.tsx"
});
// return rollup object
const out = await bundle.generate({ format: "esm" });
console.log(out.output[0]);
```

## Example: You can import npm registry

```bash

```

## Chrome Extension

![](https://i.gyazo.com/2654174b726b6d396cfdec004cb42199.gif)

1. Check if your Node.js version is >= 12.
2. Clone this repository.
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
4. Run `yarn build`
5. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
6. Have fun.

See detail

- [Webpack docs](https://webpack.js.org)
- [Chrome Extension](https://developer.chrome.com/extensions/getstarted)

## How to develop

```
yarn workspace browserpack-ui demo
```

## LICENSE

MIT

- Kotaro Chikuba ~ [@mizchi](https://twitter.com/mizchi)
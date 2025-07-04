# webpack-copy-version-plugin

A simple Webpack plugin to copy the version number from `package.json` to `manifest.json` or any other JSON file with a `version` property.

## Installation

```sh
npm install --save-dev webpack-copy-version-plugin
```

## Usage

Add the plugin to your `webpack.config.js`:

```js
const CopyVersionPlugin = require("webpack-copy-version-plugin");

module.exports = {
  // ...other webpack config...
  plugins: [
    new CopyVersionPlugin({
      from: "package.json",   // optional, defaults to "package.json"
      to: "manifest.json"     // optional, defaults to "manifest.json"
    })
  ]
};
```

### Options

- **from**: `string`  
  Path or filename to read the version from. Defaults to `"package.json"`.

- **to**: `string`  
  Path or filename to write the version to. Defaults to `"manifest.json"`.

## How it works

During the Webpack build, this plugin reads the `version` property from the `from` file and writes it to the `version` property in the `to` file, preserving other properties.

## Example

If your `package.json` contains:

```json
{
  "name": "my-app",
  "version": "1.2.3"
}
```

And your `manifest.json` contains:

```json
{
  "name": "My App",
  "version": "0.0.0"
}
```

After running Webpack, `manifest.json` will be updated to:

```json
{
  "name": "My App",
  "version": "1.2.3"
}
```

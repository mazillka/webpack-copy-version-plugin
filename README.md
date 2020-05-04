# webpack-copy-version-plugin
Webpack plugin to copy version number from package.json to manifest.json or any other json files with version property

**Installation**

npm install --save-dev **webpack-copy-version-plugin**

**Usage**

    const CopyVersionPlugin = require("webpack-copy-version-plugin");
    
    ...
    
    // add to webpack plugins array
    plugins: [
    	new CopyVersionPlugin(options)
    ]
    
    /*
    options: {
    	from: string, path or file name, "package.json" by default
    	to: string, path or file name, "manifest.json" by default
    }
    */

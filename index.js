const fs = require("fs");
const path = require("path");

class CopyVersionPlugin {
	constructor(options) {
		const defaultOptions = {
			from: "package.json",
			to: "manifest.json",
		};

		this.options = { ...defaultOptions, ...options };
	}

	apply(compiler) {
		compiler.hooks.emit.tapAsync("CopyVersionPlugin", (compilation, callback) => {
			const { watch, context } = compilation.options;

			if (watch) {
				return callback();
			}

			const { from, to } = this.options;
			const { version } = require(path.resolve(context, from));
			const fileToUpdate = require(path.resolve(context, to));

			fs.writeFile(to, JSON.stringify({ ...fileToUpdate, version }, null, 4), error => {
				if (error) {
					console.error(`webpack-copy-version-plugin: can't copy version`, error);
				} else {
					console.log("webpack-copy-version-plugin: version copied successfully");
				}
			});

			callback();
		});
	}
}

module.exports = CopyVersionPlugin;

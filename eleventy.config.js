const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	// eleventyConfig.ignores.add("*.md");
	eleventyConfig.addPassthroughCopy({ public: "./" });
	eleventyConfig.addPlugin(pluginWebc);
	eleventyConfig.setServerOptions({
		domDiff: false
	});

	return {
		markdownTemplateEngine: "webc"
	}

};
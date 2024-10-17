import pluginWebc from "@11ty/eleventy-plugin-webc";
import markdownIt from "markdown-it";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ public: "./" });
	eleventyConfig.addPlugin(pluginWebc);
	eleventyConfig.setServerOptions({
		domDiff: false
	});

	eleventyConfig.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}));

	return {
		markdownTemplateEngine: "webc"
	}

};
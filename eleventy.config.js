import pluginWebc from "@11ty/eleventy-plugin-webc";
import markdownIt from "markdown-it";
import { container } from "@mdit/plugin-container";
import { figure } from "@mdit/plugin-figure";

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

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(container, {
		name: "example"
	}));

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(container, {
		name: "strip"
	}));

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(figure, {
		focusable: false
	}));

	return {
		markdownTemplateEngine: "webc"
	}

};
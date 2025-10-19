module.exports = function(eleventyConfig) {
  // Copy static assets to _site
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add a global `year` variable
  eleventyConfig.addGlobalData("year", new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "html", "md"]
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Collections for future content migration
  eleventyConfig.addCollection("sermons", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/sermons/**/*.md").reverse();
  });
  eleventyConfig.addCollection("events", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/events/**/*.md").reverse();
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

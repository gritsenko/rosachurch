module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  
  // Date filters
  eleventyConfig.addFilter("date", function(date, format, locale) {
    if (!date) return '';
    
    const d = new Date(date);
    
    if (format === 'DD') {
      return d.getDate().toString().padStart(2, '0');
    }
    
    if (format === 'MMMM' && locale === 'ru') {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      return months[d.getMonth()];
    }
    
    if (format === 'YYYY') {
      return d.getFullYear().toString();
    }
    
    // Default format
    return d.toLocaleDateString('ru-RU');
  });
  
  // Array slice filter
  eleventyConfig.addFilter("slice", function(array, start, end) {
    return array.slice(start, end);
  });
  
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

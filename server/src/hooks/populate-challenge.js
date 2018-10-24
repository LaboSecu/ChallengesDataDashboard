

module.exports = function (options = {}) {
  return async context => {
    const regex = /(.*?)\.(.*?)\@/gm;
    let {email} = context.data;
    let match;

    while ((match = regex.exec(email)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      context.data = {
        ...context.data,
        firstName: match[1],
        lastName: match[2]
      }
    }

    return context;
  };
};

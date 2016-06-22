exports.debug = (title, obj) => {
  const lineBreak = '\n<~~~~~~~~~~~~~~~~~~~~~~~>\n';
  const lineOut = lineBreak + title + lineBreak;
  // Turns on DEBUG = TRUE.
  if (process.env.DEBUG) {
    console.log(title, obj, lineOut);
  }
};

// testing codeship

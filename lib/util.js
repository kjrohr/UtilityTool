// const packageJSON = require('../package.json');
exports.debug = (title, obj, status) => {
  const lineBreak = '\n<~~~~~~~~~~~~~~~~~~~~~~~>\n';
  const lineOut = lineBreak + title + lineBreak;
  // Turns on DEBUG = TRUE.
  if (status != null) {
    console.warn('Status is null');
  } else {
    console.log('Status: ' + status);
  }
  if (process.env.DEBUG) {
    console.log(title, obj, lineOut);
  } else {
    console.error(new Error('Environmental Variable DEBUG not true'));
  }
};

exports.bump = (currentVersion, typeOfUpdate) => {
  let hotfix = currentVersion.hotfix;
  let minor = currentVersion.minor;
  let major = currentVersion.major;
  if (typeof typeOfUpdate) {
    if (typeOfUpdate === 'hotfix') {
      hotfix += 1;
    }
    if (typeOfUpdate === 'minor') {
      minor += 1;
    }
    if (typeOfUpdate === 'major') {
      hotfix = 0;
      minor = 0;
      major += 1;
    }
  } else {
    console.warn('Please for your second argument please type in hotfix, minor, or major');
  }
  console.log('Your new version number should be: ' + major + '.' + minor + '.' + hotfix);
};

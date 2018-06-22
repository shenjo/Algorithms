const fs = require('fs'),
    path = require('path');

const generateLeetCodeSolverJSFileName = name => {
  fs.writeFile(path.resolve(`../${name.replace(/\s+/g,'_')}.js`), '');
};

generateLeetCodeSolverJSFileName('Count and Say')
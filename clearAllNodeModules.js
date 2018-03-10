// npm i -g rimraf
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

// https://stackoverflow.com/questions/15636367/nodejs-require-a-global-module-package
function requireGlobal(packageName) {
  const globalNodeModules = childProcess.execSync('npm root -g').toString().trim();
  const packageDir = path.join(globalNodeModules, packageName);
  if (!fs.existsSync(packageDir)) {
    packageDir = path.join(globalNodeModules, 'npm/node_modules', packageName); //find package required by old npm
  }
  if (!fs.existsSync(packageDir)) {
    throw new Error('Cannot find global module \'' + packageName + '\'');
  }
  const packageMeta = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json')).toString());
  const main = path.join(packageDir, packageMeta.main);
  return require(main);
}

const rimraf = requireGlobal('rimraf');
const rimrafPromise = file => new Promise((resolve, reject) => rimraf(file, err => err ? reject(err) : resolve(file)));
const rimrafPromiseDebug = file => new Promise((resolve, reject) => setTimeout(()=> resolve(file), 100));
// const isDirectory = file => fs.statSync(file).isDirectory() && /^\d{2}_/.test(file);
const isDirectory = file => /^\d{2}_/.test(file);
const generatorTask = dirPath => () => {
  console.log(dirPath);
  return Promise.all([
    rimrafPromise(`${dirPath}/build`),
    rimrafPromise(`${dirPath}/node_modules`)
    // rimrafPromiseDebug(`${dirPath}/build`),
    // rimrafPromiseDebug(`${dirPath}/node_modules`)
  ])
};
const promiseSequence = tasks => {
  let index = 0;
  const totals = tasks.length;
  return tasks.reduce((promise, task) => promise.then(()=> {
    console.log(Math.floor(index++ / totals * 100)+'%');
    return task();
  }), Promise.resolve());
}

const completeMessage = '!!!! Complete !!!';



const generatorPath = (folderName) => {
  return fs.readdirSync(path.resolve(folderName))
    .filter(isDirectory)
    .map((name) => path.join(folderName, name));
};

console.log(generatorPath('example'));

// entry point
Promise.resolve()
  .then(() => [...generatorPath('example'), ...generatorPath('exercise')])
  .then(dirs => dirs.map(dirPath => generatorTask(dirPath)))
  .then(tasks => promiseSequence(tasks))
  .then(() => console.log(completeMessage))
  .then(() => setTimeout(process.exit,1000))
  .catch(err => console.error(err));
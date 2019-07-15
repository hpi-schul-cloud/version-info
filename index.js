const getRepoInfo = require('git-repo-info');
const program = require('commander');
const fs = require('fs');

program
  .option('f', '--file', 'output filename')
  .parse(process.argv);

const run = () => {
  const pkg = JSON.parse(fs.readFileSync('package.json'));
  const info = getRepoInfo();
  const { version } = pkg;
  info.version = version;
  if (program.file) {
    fs.writeFileSync(program.file, JSON.stringify(info));
  } else {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(info));
  }
};

run();

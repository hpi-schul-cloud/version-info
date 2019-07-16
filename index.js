const getRepoInfo = require('git-repo-info');
const fs = require('fs');

const fields = [
  'abbreviatedSha',
  'sha',
];

const run = () => {
  const pkg = JSON.parse(fs.readFileSync('package.json'));

  const info = getRepoInfo();

  const { version } = pkg;

  const result = { };
  result.version = version;
  fields.forEach((field) => {
    result[field] = info[field];
  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result));
};

run();

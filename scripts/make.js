const { execSync } = require('child_process');
const fs = require('fs');

require('yargs')(process.argv.slice(2))
  .command(
    'schema [target]',
    '生成 JSON Schema',
    (yargs) => yargs.choices('target', ['all']),
    ({ target }) => {
      if (target == 'all') {
        fs.rmdirSync('src/facts/types', { recursive: true });
        execSync('json2ts src/facts/schemas/ -o src/facts/types/');
      }
    },
  )
  .command(
    'puml [filename]',
    '生成 PlantUML',
    (yargs) => yargs.option('filename'),
    ({ filename }) => {
      execSync(
        `plantuml -tsvg src/plantumls/${filename} -o ../../static/plantumls/`,
      );
    },
  )
  .strict().argv;

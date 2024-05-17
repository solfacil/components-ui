#!/usr/bin/env node

const partition = require('lodash/partition');
const uniq = require('lodash/uniq');
const { Spinner } = require('cli-spinner');
const { exec } = require('child_process');
const fs = require('fs');

const { log } = console;

const STAGED_DIFF_CMD =
  "git diff --cached --name-only --diff-filter=ACM | grep -E -- '\\.vue|js$' || true";
const LINTER_CMD = 'yarn lint';
const SPECS_LINTER_CMD = 'yarn lint';
const TESTS_CMD = 'yarn test';

log('Calma aí, deixa eu ver se tá tudo certo.');

function execAsync(command, options = {}) {
  log(`Running: ${command}`);

  const loader = new Spinner();
  loader.start();

  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout) => {
      loader.stop(true);

      if (error) {
        reject(new Error(`\n✖ Command failed:\n${command}\n`));
      }

      resolve(stdout.split('\n').filter((l) => l));
    });
  });
}

async function getStagedFiles() {
  const stdout = await execAsync(`${STAGED_DIFF_CMD}`);
  return stdout;
}

function runLinter(files, { isSpecs } = {}) {
  const CMD = `${isSpecs ? SPECS_LINTER_CMD : LINTER_CMD} ${files.join(' ')}`;

  return files.length ? execAsync(`${CMD}`) : Promise.resolve();
}

function runTests(files) {
  const CMD = `${TESTS_CMD} ${files.join(' ')}`;

  return files.length ? execAsync(`${CMD}`) : Promise.resolve();
}

async function main() {
  try {
    const stagedFiles = await getStagedFiles();
    const stagedVueFiles = stagedFiles.filter((file) => file.includes('.vue'));
    const [stagedSpecFiles, jsFiles] = partition(stagedFiles, (f) =>
      f.includes('.unit.spec.js'),
    );
    const specFilesForStagedComponents = stagedVueFiles
      .map((file) => {
        const testSpec = file.replace(
          /([a-zA-Z0-9]+).vue/,
          '__tests__/$1.unit.spec.js',
        );
        if (fs.existsSync(testSpec)) return testSpec;

        return file.replace(/([a-zA-Z0-9]+).vue/, '$1.unit.spec.js');
      })
      .filter((file) => fs.existsSync(file));

    const specFiles = stagedSpecFiles.concat(specFilesForStagedComponents);

    await runLinter(jsFiles);
    await runLinter(stagedSpecFiles, { isSpecs: true });
    await runTests(uniq(specFiles));

    log('Tudo certo!!');
  } catch (e) {
    log(e.message);
    process.exit(1);
  }
}

main();

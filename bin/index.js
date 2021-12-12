#!/usr/bin/env node

const cp = require('child_process');
const powershell = `${process.env.SystemRoot}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(`Syntax: launch-package <packageSpec> [args] - where packageSpec is a package family name; use * as wildcard.`);
  return -1;
}
const out = cp.execSync(`${powershell} -c ${__dirname}\\launch.ps1 ${args}`);
console.log(out.toString());

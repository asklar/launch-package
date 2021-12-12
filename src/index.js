const cp = require('child_process');
const powershell = `${process.env.SystemRoot}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
$out = cp.execSync(`${powershell} -c ${__dirname}\\launch.ps1 ${process.argv.slice(2)}`);

console.log($out.toString());

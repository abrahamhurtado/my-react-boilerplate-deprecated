var execSync = require('child_process').execSync;
var stat = require('fs').stat;

function exec(command) {
  execSync(command, { stdio: [0, 1, 2] });
}

stat('lib', function (error, stat) {
  if (error || !stat.isDirectory()) {
    if (/^win/.test(process.platform)) {
      exec('npm run win');
    } else {
      exec('npm run start:prod');
    }
  }
})

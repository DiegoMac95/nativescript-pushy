const { exec } = require('child_process');
const semver = require('semver');

exec('tns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`tns --version err: ${err}`);
        return;
    }



    // execute 'tns plugin build' for {N} version > 4. This command builds .aar in platforms/android folder.

    console.log(`executing 'tns plugin build'`);
    exec('tns plugin build', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log(`${err}`);
            return;
        }
    });

});

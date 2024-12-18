const { spawn } = require('child_process');

function RestartScript() {
    const child = spawn('node', ['index.js'], {
        stdio: 'inherit',
        shell: true
    });

    child.on('exit', (code) => {
        console.log(`Script berhenti dengan kode: ${code}`);
        console.log('Memulai ulang script...');
        RestartScript();
    });

    child.on('error', (err) => {
        console.error('Gagal memulai script:', err);
    });
}

RestartScript();
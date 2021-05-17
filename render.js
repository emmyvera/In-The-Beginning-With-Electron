function sendToPython() {
    var python = require('child_process').spawn('python', ['./hello.py']);
    python.stdout.on('data', function (data) {
        console.log("data: ", data.toString('utf8'));
    });

}


document.querySelector("#btn").addEventListener('click', () => {
    sendToPython()
});

document.querySelector("#btn").dispatchEvent(new Event('click'));
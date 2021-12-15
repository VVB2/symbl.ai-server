const https = require('https');
const url = 'https://react-sandwich-app.herokuapp.com/api/get-data';
let body = '';
https.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        body += data;
    });
    res.on('end', () => {
        body = JSON.parse(body);
        for (const key in body.data) {
            console.log(
                `ID: ${body.data[key].id}, Step ${body.data[key].id}: ${body.data[key].step}`
            );
        }
    });
});

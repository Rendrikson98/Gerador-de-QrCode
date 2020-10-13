const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const qr = require('qr-image');

app.get('/qrcode', (req, res)=>{
    const query = req.query
    const url = query.url;
    const code = qr.image(url, {type: 'svg'});

    res.type('svg');

    code.pipe(res);
})

app.get('/qrcodePng', (req, res)=>{
    const query = req.query
    const url = query.url;
    const code = qr.image(url, {type: 'png'});

    res.type('png');

    code.pipe(res);
})

app.listen(3333, () => {
    console.log('server running...');
})

import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

var app = express();
var port = process.env.PORT || 3000;
var staticPath = path.join(__dirname, '../web');
var staticModulePath = path.join(__dirname, '../../node_modules');

// Global settings.

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(staticPath));
app.use('/node_modules', express.static(staticModulePath));

// Routes.

app.get('/api/test', (req, res) => {
    res.send('test');
});

export function start() {
    app.listen(port, () => {
        console.log(`Server started from ${staticPath} on port ${port}...`);
    });
}
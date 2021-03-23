console.log('main process working');
console.log('main.js');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let winone, winTwo;

function createWindow() {
    winone = new BrowserWindow();
    winTwo = new BrowserWindow();

    winone.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }));

    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }));

    winone.webContents.openDevTools();
    winTwo.webContents.openDevTools();

    winone.on('closed', () => {
        win = null;
    })
    winTwo.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null){
        createWindow()
    }
});
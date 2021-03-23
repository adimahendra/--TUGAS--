console.log('from Renderer 1');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtn');
newWindowBtn.addEventListener('click', function(event){
    let winThree = new BrowserWindow();
    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'three.html'),
        protocol: 'file',
        slashes: true
    }));
    winThree.webContents.openDevTools();
})
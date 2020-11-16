console.log("Hello Aman");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    winone = new BrowserWindow({
        height: 150,
        width: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });
    winone.loadURL(url.format({
        pathname: path.join(__dirname, './src/App.js'),
        protocol: 'file',
        slashes: true
    }));

    winone.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);

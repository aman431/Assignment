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
        // frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // wintwo = new BrowserWindow({
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // });
    winone.loadURL(url.format({
        pathname: path.join(__dirname, './src/App.js'),
        protocol: 'file',
        slashes: true
    }));

    // wintwo.loadURL(url.format({
    //     pathname: path.join(__dirname, 'two.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));

    // winone.webContents.openDevTools();
    // wintwo.webContents.openDevTools();

    winone.on('closed', () => {
        win = null
    });
    // wintwo.on('closed', () => {
    //     win = null
    // });
}

app.on('ready', createWindow);
// app.on('ready', () => {
//     mainWindow = new BrowserWindow({
//         webPreferences: {
//             nodeIntegration: true
//         }
//     });
// });
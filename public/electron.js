// TODO: Append https://www.npmjs.com/package/electron-config to setup configuration
// TODO: Add Application Menu ( for example: Help?, set websocket addres? port?)
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 680,
    resizable: false,
    center: true,
    maximizable: false,
    minimizable: true,
    alwaysOnTop: true
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
const { BrowserWindow, ipcMain, nativeTheme } = require('electron');
const { join } = require('path');

function handleSetTitle(event, title) {
  console.log(title);

  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}

function mainWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('set-title', handleSetTitle);

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light';
    } else {
      nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system';
  });

  win.loadFile(join(__dirname, 'index.html'));
}

module.exports = mainWindow;

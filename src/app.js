const { app, BrowserWindow } = require('electron');
const mainWindow = require('./windows/main/main');

app.on('ready', () => {
  mainWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

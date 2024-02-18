const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
});

contextBridge.exposeInMainWorld('mainService', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  listenOn: (callback) => ipcRenderer.addListener('listen', callback),
});

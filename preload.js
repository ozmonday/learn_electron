const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('suter', {
  name: "suter"
})

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})





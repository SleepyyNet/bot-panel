const { app, BrowserWindow } = require('electron')

let win


function Index () {
  win = new BrowserWindow({ width: 800, height: 600, frame: false, resizable: false })
  win.loadFile('./pages/index.html')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', Index)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

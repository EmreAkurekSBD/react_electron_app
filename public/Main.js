const path = require('path')
const {app, BrowserWindow} = require('electron')


function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

//  Enable access to DevTools within our Chromium front-end
    win.webContents.openDevTools()

// and load the index.html of the app.     win.loadFile('index.html')   }

   // win.loadURL('http://localhost:3000/')
   win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)


}

app.on('ready', createWindow)

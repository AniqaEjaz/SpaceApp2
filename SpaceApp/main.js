//============================================================================
// Name        : main.js
// Author      : Areeb Asad
// Version     : 1.2
// Copyright   : (c) Reserved
//=============================================================================



// app           => Module to control application life.
// BrowserWindow => Module to create native browser window.
const {app, BrowserWindow, Menu, dialog, shell} = require('electron')
const {download} = require('electron-dl')
const DownloadManager = require("electron-download-manager"); //temprory
const PDFWindow = require('electron-pdf-window');
var openAboutWindow = require('about-window').default;
const path = require('path')
const url = require('url')
var fs = require('fs')


const {ipcMain} = require('electron')                         // For main process
//eval(fs.readFileSync(__dirname + '/source/js/Drive.js')+'');  //Include driver.js
  

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindowR = null,
    loadingScreenR = null
    






function createMainWindow () {
  // Create the browser window.
  mainWindowR = new BrowserWindow({ width: 900, height: 600 ,backgroundColor: '#2e2c29', show:false });

  // and load the index.html of the app.
   mainWindowR.loadURL(url.format({
     pathname: path.join(__dirname, '/source/index.html'),
     protocol: 'file:',
     slashes: true
   }))

   


   //When loading of index.html done, show window and close loadingScreen
   mainWindowR.webContents.on('did-finish-load', () => {
        mainWindowR.show();

       
        
        // let contents = mainWindowR.webContents
        //console.log(contents)

        if (loadingScreenR) {
            //let loadingScreenBounds = loadingScreen.getBounds();
            //mainWindow.setBounds(loadingScreenBounds);
            loadingScreenR.close();
        }
   });

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindowR.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    
    mainWindowR = null;
    
  })
}










// Self explanatory func
function createLoadingScreen() {
    loadingScreenR = new BrowserWindow(Object.assign({  width: 800, height: 500,backgroundColor: '#2e2c29', frame: false }, {parent: mainWindowR}));
    loadingScreenR.loadURL('file://' + __dirname + '/source/loading.html');
    
    loadingScreenR.on('closed', () => loadingScreenR = null);

    loadingScreenR.webContents.on('did-finish-load', () => {
        loadingScreenR.show();
    });
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.


app.on('ready',() =>{
 
  createLoadingScreen();
  createMainWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createMainWindow()
  }
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.




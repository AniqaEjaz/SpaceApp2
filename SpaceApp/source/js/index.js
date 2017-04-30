//============================================================================
// Name        : index.js
// Author      : Osama
// Co-Author   : Areeb Asad
// Version     : 2.0
// Copyright   : (c) Reserved




const remote = require('electron').remote
const isOnline = require('is-online');

const {ipcRenderer} = require('electron')

document.addEventListener('DOMContentLoaded', function() {

    console.log('document is ready. I can sleep now');
   
    $(document).ready(function(){
        /*Slides Navigation Menu when clicled on switch button in Menu bar*/ 
        $("#switch").click(function(){
           // $('.pane-sm, .sidebar ').fadeToggle('fast');
            $('.pane-sm, .sidebar ').animate({'width': 'toggle'},'fast');
        });


    });


   
    
});
  


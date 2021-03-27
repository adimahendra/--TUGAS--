const openBtn = document.getElementById('openBtn')
const shell = require('electron').shell

openBtn.addEventListener('click', function(event){
  shell.showItemInFolder('D:\\electronfolder\\test.txt')
  shell.openItem('D:\\electronfolder\\vector.jpg')
  shell.openExternal('http://electron.atom.io')
})
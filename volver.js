// llamada cuando el usuario hace clic sobre la extensión
chrome.browserAction.onClicked.addListener(function(tab) {
 
  console.log('Cambiando ' + tab.url + ' a azul!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="blue"'
  });
});
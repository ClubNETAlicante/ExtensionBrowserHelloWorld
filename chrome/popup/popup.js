function refrescar() {	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
}

document.getElementById('boton').addEventListener('click', refrescar);
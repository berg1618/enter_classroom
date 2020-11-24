chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	debugger;
	if(tab.url.indexOf('https://classroom.google.com/u/') > -1){
		chrome.pageAction.show(tabId);
		chrome.tabs.executeScript(tab.id, {file:"content.js"});
	}
	//this part make the extension available on classroom and run the content
});
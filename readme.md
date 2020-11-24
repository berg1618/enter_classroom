page action problem, onclicked problem; you should set the icon manually(gray and normal)
https://stackoverflow.com/questions/64473519/how-to-disable-gray-out-page-action-for-chrome-extension/64475504#64475504
icon in grayscale//solved

can i send a message from the background to the content script?
https://stackoverflow.com/questions/21148115/chrome-extension-send-message-from-background-js-to-content-script
https://stackoverflow.com/questions/23895377/sending-message-from-a-background-script-to-a-content-script-then-to-a-injected
The message is sent when the browser starts or the extension is enabled but at that moment there is no active content script to receive it. Similarly, when you reload the webpage, your background page isn't reloaded, so no message is sent, and consequently, nothing is received.

this was my solution for connection's problem on the previous extension:
https://stackoverflow.com/questions/54619817/how-to-fix-unchecked-runtime-lasterror-could-not-establish-connection-receivi/60086505#60086505

https://stackoverflow.com/questions/54181734/chrome-extension-message-passing-unchecked-runtime-lasterror-could-not-establi
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/onUpdated
onConnect:
Fired when a connection is made from either an extension process or a content script (by runtime.connect).

chrome.runtime.onConnect.addListener(function callback)
solve port's problem//
return to the message passing and what's error handling?
error handling is the same thing as debugging
there was a typo in sendMessage

the project was simplified
add some script to make it run in the back(isn't done) and make it run everywhere(did)
try the persistency//doesn't work 

finished!
let btnScrapProfile = document.getElementById('btnScrapProfile')
let btnScrapList = document.getElementById('btnScrapList')

btnScrapProfile.addEventListener('click', async ()=>{
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    var port = chrome.tabs.connect(tab.id);
    port.postMessage({action: 'scrapProfile'});
})

btnScrapList.addEventListener('click', async ()=>{
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    var port = chrome.tabs.connect(tab.id);
    port.postMessage({action: 'scrapListing'});
})
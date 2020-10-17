chrome.browserAction.onClicked.addListener(() => {
  chrome.storage.sync.get('isExtensionActive', storage => {
    chrome.storage.sync.set({
      isExtensionActive: !storage.isExtensionActive,
    })
  })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  setIcon(request.active, sender.tab.id)
})

function setIcon(isActive, tabId) {
  const path = isActive ? "icons/active.png" : "icons/icon.png"
  chrome.browserAction.setIcon({
    path, 
    tabId
  })
}
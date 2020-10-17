chrome.browserAction.onClicked.addListener((tab) => {
  chrome.storage.sync.get('isExtensionActive', storage => {
    chrome.storage.sync.set({
      isExtensionActive: !storage.isExtensionActive,
    })

    setIcon(storage.isExtensionActive)
  })
})

const setIcon = (isExtensionActive) => {
  console.log('Toggle icon', isExtensionActive)
  
  const path = isExtensionActive ? "icons/active.png" : "icons/icon.png"
  chrome.browserAction.setIcon({
    path: path
  })
}
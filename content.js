chrome.storage.onChanged.addListener(changes => {
  if (changes.isExtensionActive) {
    console.log('Is now active')
  }
})
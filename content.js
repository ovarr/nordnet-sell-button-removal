chrome.storage.onChanged.addListener((changes) => {
  if (changes) {
    chrome.storage.sync.get('extensionActive', storage => {
      rmSellBtn(storage.extensionActive)
    })
  }
})

const rmSellBtn = (state) => {
  chrome.runtime.sendMessage({state: state})
  const sellBtn = document.querySelectorAll('a[href*="/toimeksianto/myy"]');
  state ? sellBtn.forEach((a) => a.style.visibility = 'hidden') : sellBtn.forEach((a) => a.style.visibility = 'visible')
}

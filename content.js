chrome.storage.onChanged.addListener(changes => {
  if (changes.isExtensionActive) {
    rmSellBtn(changes.isExtensionActive.newValue)
  }
})

const rmSellBtn = (state) => {
  chrome.runtime.sendMessage({"active": state})
  const sellBtn = document.querySelectorAll('a[href*="/toimeksianto/myy"]');
  state ? sellBtn.forEach((a) => a.style.visibility = 'hidden') : sellBtn.forEach((a) => a.style.visibility = 'visible')
}
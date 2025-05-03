chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.notas) {
    const notas = request.notas
    const inputs = document.querySelectorAll('input[name^="NOTA"]')

    inputs.forEach((input, i) => {
      if (i < notas.length) {
        input.value = notas[i]
      }
    })
  }
})

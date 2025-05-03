document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myform').addEventListener('submit', (e) => {
    e.preventDefault()

    try {
      const notas = document
        .querySelector('#notas')
        .value.split('\n')
        .map((nota) => nota.replace('.', ','))

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs && tabs.length > 0) {
          chrome.scripting.executeScript(
            {
              target: { tabId: tabs[0].id },
              files: ['content.js']
            },
            function () {
              chrome.tabs.sendMessage(tabs[0].id, { notas })
            }
          )
        } else {
          console.error('Nenhuma aba ativa encontrada.')
        }
      })
    } catch (error) {}
  })
})

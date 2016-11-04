const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(elem) {
    const key = parseInt(elem.which || elem.detail)

    if (code[index] === key) {
      index++

      if (index === code.length - 1) {
        alert('MADE IT')

        index = 0
      }
    } else {
      index = 0
    }
  })
}

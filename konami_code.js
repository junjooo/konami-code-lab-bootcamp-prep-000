const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {
  const body = document.querySelector('body')
  body.addEventListener('keydown', function(e) {
    const input = parseInt(e.which||e.detail)
    if (input === code[index]) {
      index++
      if (index === code.length -1 ) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}

let $ = document
$.body.addEventListener('keydown', function (event) {
    event.preventDefault()
    let infos = $.querySelector('#infos')
    let h1 = $.querySelector('h1')
    let heading = $.querySelector('#heading')
    let starter = $.querySelector('section')
    let key = event.key
    let location = event.location
    let which = event.which
    let evEnt = event.code
    let keyBox = $.querySelector('#key')
    let locationBox = $.querySelector('#location')
    let whichBox = $.querySelector('#which')
    let eventBox = $.querySelector('#code')
    if (key === ' ') {
        keyBox.innerHTML = '(space character)'
    } else {
        keyBox.innerHTML = key
    }
    locationBox.innerHTML = String(location)
    whichBox.innerHTML = String(which)
    eventBox.innerHTML = String(evEnt)
    infos.style.display = 'flex'
    heading.style.display = 'flex'
    starter.style.display = 'none'
    h1.innerHTML = String(which)
    console.log(key)
})
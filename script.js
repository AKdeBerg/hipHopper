const playSound = function (e) {
    //target the div element according to the keycode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //check if the key is null
    //we use truthy falsy nature of js
    if (!key) return

    //now select the audio 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //set the current time to zero to rewind everytime a key is down
    audio.currentTime = 0
    //play the audio
    audio.play()

    //add the playing class for effect
    key.classList.add('playing')
}

window.addEventListener('keydown', playSound)

//remove the classlist from every .key class
const removeFunc = function (e) {
    const keys = [...document.querySelectorAll('.key')]
    keys.forEach((key) => {
        key.classList.remove('playing')
    })

}
//when should we remove? just when the transitionend happend
document.addEventListener('transitionend', removeFunc)
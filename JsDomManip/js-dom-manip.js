function voice() {

    var voiceElem = document.createElement('span');
    voiceElem.innerText = ' Гав! Гав! РРР! ';

    var voicesPlace = document.getElementById('voices');
    voicesPlace.appendChild(voiceElem);

}


function play() {
    var x = Math.random() * window.innerWidth;

    var image = document.getElementById('dogPhoto');
    image.style.left = x + 'px';
}
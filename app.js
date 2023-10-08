const spoiler = document.querySelector('#spoiler');
const btn = document.querySelector('#myBtn');

btn.addEventListener ('click', () => {
spoiler.classList.toggle('closed')
})

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27 && !spoiler.classList.contains('closed')) spoiler.classList.add("closed") ;
})

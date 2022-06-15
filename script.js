let blockHidden = document.querySelector('.block-hidden');
let blo = document.querySelector('.block');
let btn = document.querySelector('button');
let input = document.querySelector('.input');
function pp () {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value === 'ягодка' || input.value === 'Ягодка') {
            blockHidden.classList.add('blocks');
            blo.classList.add('none');
        } else {

        }
    })


}
pp()
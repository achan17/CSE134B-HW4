function loadHandler() {
    let darkBtn = document.getElementsByClassName('press')[0]; 
    let mode = document.getElementById('mode');
    if(localStorage.getItem('darkLight') === 'dark') {
        mode.className='dark';
    }
    else {
        mode.className='light';
    }
    darkBtn.addEventListener('click', btnPressed);

}

function btnPressed() {
    let darkBtn = document.getElementById('mode')
    if(localStorage.getItem('darkLight') === 'dark' ) {
        darkBtn.className='light';
        localStorage.setItem('darkLight', 'light');
    }
    else {
        darkBtn.className='dark';
        localStorage.setItem('darkLight', 'dark');
    }
}

window.addEventListener("load", loadHandler);
const bgBtn = document.getElementById('bg-btn');

let state = false;

bgBtn.addEventListener('click', function() {
    state = !state;
    if (state) {
        document.body.style.animation = 'backgroundShiftLight 1s ease-in-out';
        document.body.style.backgroundColor = 'rgb(162, 191, 214)';
        bgBtn.style.backgroundColor = 'rgb(49, 71, 71)';
        bgBtn.style.color = 'white';
    }else{
        document.body.style.animation = 'backgroundShiftDark 1s ease-in-out';
        document.body.style.backgroundColor = 'rgb(49, 71, 71)';
        bgBtn.style.backgroundColor = 'rgb(162, 191, 214)';
        bgBtn.style.color = 'darkslategray';
    }
});
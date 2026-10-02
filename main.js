const bgBtn = document.getElementById('bg-btn');
const rootStyles = window.getComputedStyle(document.documentElement);
const lightColor = rootStyles.getPropertyValue('--light-color').trim();
const darkColor = rootStyles.getPropertyValue('--dark-color').trim();

let state = true;

bgBtn.addEventListener('click', function() {
    state = !state;
    if (state) {
        document.body.style.animation = 'backgroundShiftLight 1s ease-in-out';
        document.body.style.backgroundColor = lightColor;
        bgBtn.style.backgroundColor = darkColor;
        bgBtn.style.color = 'white';
        bgBtn.textContent = 'Night Mode'
    }else{
        document.body.style.animation = 'backgroundShiftDark 1s ease-in-out';
        document.body.style.backgroundColor = darkColor;
        bgBtn.style.backgroundColor = lightColor;
        bgBtn.style.color = 'black';
        bgBtn.textContent = 'Light Mode'
    }
});

window.addEventListener("scroll", function() {          
            // Check if scroll position is greater than 50 pixels
            if (window.scrollY > 50) {
                bgBtn.classList.add("shrunk");
                bgBtn.textContent = ''
            } else {
                bgBtn.classList.remove("shrunk");
                bgBtn.textContent = 'Night Mode'
            }
        });
const bgBtn = document.getElementById('bg-btn');
const rootStyles = window.getComputedStyle(document.documentElement);
const lightColor = rootStyles.getPropertyValue('--light-color').trim();
const darkColor = rootStyles.getPropertyValue('--dark-color').trim();

document.body.classList.toggle(
    'dark-mode',
    localStorage.getItem('theme') === 'dark'
);

requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.body.classList.remove('theme-loading');
    });
});

if (bgBtn) {
    const syncButton = () => {
        const isDark = document.body.classList.contains('dark-mode');
        bgBtn.style.backgroundColor = isDark ? lightColor : darkColor;
        bgBtn.style.color = isDark ? 'black' : 'white';
        bgBtn.textContent = isDark ? 'Light Mode' : 'Night Mode';
    };

    syncButton();

    bgBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        syncButton();
    });
}

bgBtn.addEventListener('click', function() {
    state = !state;
    document.body.classList.toggle('dark-mode', !state);
    if (state) {
        console.log( 'going light');
        bgBtn.style.backgroundColor = darkColor;
        bgBtn.style.color = 'white';
        bgBtn.textContent = 'Night Mode'
    }else{
        console.log('going dark');
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
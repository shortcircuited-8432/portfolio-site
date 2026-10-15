const bgBtn = document.getElementById('bg-btn');
const navLink = document.getElementById('navlink');
const rootStyles = window.getComputedStyle(document.documentElement);
const lightColor = rootStyles.getPropertyValue('--light-color').trim();
const darkColor = rootStyles.getPropertyValue('--dark-color').trim();

document.body.classList.toggle(
    'dark-mode',
    localStorage.getItem('theme') === 'dark'
);

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

let state = true;

bgBtn.addEventListener('click', function() {
    state = !state;
    document.body.classList.toggle('dark-mode', !state);
    document.body.classList.remove('notransition');
    if (state) {
        bgBtn.style.backgroundColor = darkColor;
        bgBtn.style.color = 'white';
        bgBtn.textContent = 'Night Mode'
    }else{
        bgBtn.style.backgroundColor = lightColor;
        bgBtn.style.color = 'black';
        bgBtn.textContent = 'Light Mode'
    }
});

navLink.addEventListener('click', function() {
    document.body.classList.add('notransition');
});
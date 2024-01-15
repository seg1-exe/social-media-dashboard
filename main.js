const switchBtn = document.getElementById('mode-switch');
const app = document.getElementById('app');
const appTop = document.querySelector('.top');
const titles = document.querySelectorAll('.dark-mode-title');
const cards = document.querySelectorAll('.dark-mode-card-bg');
const slider = document.querySelector('.switch');

switchBtn.addEventListener('change', function() {
    if (this.checked) {
        console.log('Light mode');
        app.classList.remove('dark-mode-bg');
        appTop.classList.remove('dark-mode-top-bg');
        titles.forEach(title => {
            title.classList.remove('dark-mode-title');
        });
        cards.forEach(card => {
            card.classList.remove('dark-mode-card-bg');
        });
        slider.classList.remove('slider-dark');

        app.classList.add('light-mode-bg');
        appTop.classList.add('light-mode-top-bg');
        titles.forEach(title => {
            title.classList.add('light-mode-title');
        });
        cards.forEach(card => {
            card.classList.add('light-mode-card-bg');
        });
        slider.classList.add('slider-light');
    } else {
        console.log('Dark mode');
        app.classList.remove('light-mode-bg');
        appTop.classList.remove('light-mode-top-bg');
        titles.forEach(title => {
            title.classList.remove('light-mode-title');
        });
        cards.forEach(card => {
            card.classList.remove('light-mode-card-bg');
        });

        app.classList.add('dark-mode-bg');
        appTop.classList.add('dark-mode-top-bg');
        titles.forEach(title => {
            title.classList.add('dark-mode-title');
        });
        cards.forEach(card => {
            card.classList.add('dark-mode-card-bg');
        });
    }
});
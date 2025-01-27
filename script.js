
const form = document.querySelector('form');
const navButtons = document.querySelectorAll('.nav-btn');
const inviteSection = document.querySelector('#invite');
const backToTopButton = document.createElement('button');


const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// top page
backToTopButton.textContent = ' ↑ ';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#2bb7da';
backToTopButton.style.color = '#000';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);


backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// form
inviteSection.style.display = 'none';

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        inviteSection.style.display = 'block';
        inviteSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

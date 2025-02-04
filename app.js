const themeToggleButton = document.getElementById('theme-toggle');
        const sunIcon = themeToggleButton.querySelector('.fa-sun');
        const moonIcon = themeToggleButton.querySelector('.fa-moon');
        const body = document.body;


        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }

        themeToggleButton.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
                sunIcon.style.display = 'inline-block';
                moonIcon.style.display = 'none';
            } else {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline-block';
            }
        });
const clickBtn = document.getElementById('clickBtn');
        const menu = document.getElementById('Menu');

        clickBtn.addEventListener('click', () => {
            menu.classList.toggle('aktif');
        });

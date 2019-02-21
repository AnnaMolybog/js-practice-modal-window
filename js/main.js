let container = document.querySelector('.container'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
        container.addEventListener('click', function(event) {
        if (event.target && event.target == more) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        let moreSplashElement = document.querySelector('.more-splash');

        moreSplashElement.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
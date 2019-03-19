let container = document.querySelector('.container'),
    more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    form = document.getElementById('modal-window-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.getElementById('status');

container.addEventListener('click', function(event) {
    if (event.target && event.target == more) {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
});

close.addEventListener('click', function() {
    closeModalWindow();
});

formSubmitEventListener(form, 'index.php');

function closeModalWindow() {
    overlay.style.display = 'none';
    let moreSplashElement = document.querySelector('.more-splash');

    moreSplashElement.classList.remove('more-splash');
    document.body.style.overflow = '';
}

function formSubmitEventListener(form, url) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let data = new FormData(form),
            dataObj = {};

        data.forEach((item, key) => {
            dataObj[key] = item;
        });

        function postData(data) {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', url);
                request.setRequestHeader('Content-type', 'application/json');

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        console.log('Loading...');
                    } else if (request.readyState === 4 && request.status == 200) {
                        console.log('resolved');
                        resolve();
                    } else {
                        reject(new Error('something went wrong'))
                    }
                }

                request.send(JSON.stringify(data));
            })
        }

        postData(dataObj)
            .then(() => {
                closeModalWindow();
                statusMessage.innerHTML = 'Thank you for you request!'
            }).catch((error) => statusMessage.innerHTML = error.message);
    })
}

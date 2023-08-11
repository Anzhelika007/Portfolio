function progressBar() {
    const progressValue = document.querySelectorAll('.progressbar');
    progressValue.forEach(value => {
        const percent = +value.querySelector('.percent').innerText;
        if (percent >= 50) {
            value.classList.add('over_50');
        } else {
            value.classList.remove('over_50');
        }
        const deg = (360 - percent / 100) + 180;
        value.querySelector('.right').style.transform = `rotate(${deg}deg)`;
    });
};
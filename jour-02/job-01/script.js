function myChangeBackgroundColor() {
    const screen = {
        medium : 505,
        large : 1337
    };
    window.addEventListener('DOMContentLoaded', function () {
        let iw = window.innerWidth;
        let htmlElement = document.getElementsByTagName('html');
        console.log(htmlElement);
        if (iw >= screen.medium && iw < screen.large) {
            htmlElement[0].style.backgroundColor = '#d90429';
        }
        else if (iw >= screen.large) {
            htmlElement[0].style.backgroundColor = '#ffb703';
        }
        else {
            htmlElement[0].style.backgroundColor = '#003049';
        }
    });
    window.addEventListener('resize', function() {
        console.log(window.innerWidth);
        // window width (calcule la largeur de la page)
        let iw = window.innerWidth;
        let htmlElement = document.getElementsByTagName('html');
        if (iw >= screen.medium && iw < screen.large) {
            htmlElement[0].style.backgroundColor = '#d90429';
        }
        else if (iw >= screen.large) {
            htmlElement[0].style.backgroundColor = '#ffb703';
        }
        else {
            htmlElement[0].style.backgroundColor = '#003049';
        }

    });
}

myChangeBackgroundColor();
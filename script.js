function getRandomNumberPlease (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GO () {
    var numOne = getRandomNumberPlease(0, rowOne.length - 1);
    var numTwo = getRandomNumberPlease(0, rowTwo.length - 1);

    document.querySelector('.💩').innerHTML = rowOne[numOne];
    document.querySelector('.💩💩').innerHTML = rowTwo[numTwo];

    setInterval(function () {
        document.querySelector('.💩').classList.add('🙋');
        document.querySelector('.💩💩').classList.add('🙋');

        setTimeout(function () {
            var numOne = getRandomNumberPlease(0, rowOne.length - 1);
            var numTwo = getRandomNumberPlease(0, rowTwo.length - 1);

            document.querySelector('.💩').innerHTML = rowOne[numOne];
            document.querySelector('.💩💩').innerHTML = rowTwo[numTwo];

            setTimeout(function () {
                document.querySelector('.💩').classList.remove('🙋');
                document.querySelector('.💩💩').classList.remove('🙋');
            }, 150);
        }, 300);
    }, 3000);
}

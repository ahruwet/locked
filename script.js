let player;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function startHearts() {
    setInterval(createHeart, 300);
}

function sendWhatsAppMessage() {
    var phoneNumber = "6285315388063";
    var message = "LAUNDRY ARAB"
    var encodedMessage = encodeURIComponent(message);
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
    window.open(whatsappURL, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    startHearts();

    // PASSWORD
    let passcode = "";
    const correctPasscode = "11312004";
    const buttons = document.querySelectorAll(".keypad-button");
    const display = document.getElementById("passcode-display");
    // PASSWORD

    //element//
    const passElement = document.getElementById("pass");

    //card element
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");
    const card5 = document.getElementById("card5");
    const card6 = document.getElementById("card6");
    const card7 = document.getElementById("card7");

    const showCard2Button = document.getElementById("showCard2");
    const showCard3Button = document.getElementById("showCard3");
    const showCard4Button = document.getElementById("showCard4");
    const showCard5Button = document.getElementById("showCard5");
    const showCard6Button = document.getElementById("showCard6");
    const showCard7Button = document.getElementById("toc7");

    const backc3Button = document.getElementById("backc3");
    const backc5Button = document.getElementById("backc5");
    //card element

    //music
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.2;
    //music
    //element//

    //tanggal
    const startDate = new Date("Sep 18, 2024 00:00:00").getTime();

    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = now - startDate;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
    //tanggal

    //button//
    showCard2Button.addEventListener("click", function() {
        card1.classList.add('hidden');
        card2.classList.remove('hidden');
    });
    showCard3Button.addEventListener("click", function() {
        card2.classList.add('hidden');
        card3.classList.remove('hidden');
    });
    showCard4Button.addEventListener("click", function() {
        card3.classList.add('hidden');
        card4.classList.remove('hidden');
    });
    showCard5Button.addEventListener("click", function() {
        card3.classList.add('hidden');
        card5.classList.remove('hidden');
    });
    showCard6Button.addEventListener("click", function() {
        card3.classList.add('hidden');
        card6.classList.remove('hidden');
    });
    showCard7Button.addEventListener("click", function() {
        card6.classList.add('hidden');
        card7.classList.remove('hidden');
    });

    backc3Button.addEventListener("click", function() {
        card4.classList.add('hidden');
        card3.classList.remove('hidden');
    });
    backc5Button.addEventListener("click", function() {
        card5.classList.add('hidden');
        card3.classList.remove('hidden');
    });
    //button//

    //event listener//
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");
            if (value === "#") {
                if (passcode === correctPasscode) {
                    bgMusic.play();
                    passElement.style.display = "none";
                    card1.classList.remove('hidden')
                } else {
                    alert("Passcode Incorrect!");
                    passcode = "";
                    display.textContent = "";
                }
            } else if (value === "*") {
                passcode = passcode.slice(0, -1);
                display.textContent = passcode;
            } else {
                passcode += value;
                display.textContent = passcode;
            }
        });
    });
    //event listener//
});
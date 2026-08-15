/* =========================
   PAGE NAVIGATION
========================= */

function goToBirthday() {

    window.location.href = "birthday.html";

}


function goToFinal() {

    window.location.href = "final.html";

}


/* =========================
   BACKGROUND PARTICLES
========================= */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    const size =
        Math.random() * 4 + 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.bottom =
        "-10px";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 13000);

}


setInterval(createParticle, 250);


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "✨"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 500);


/* =========================
   SEND LOVE BUTTON
========================= */

function createHearts() {

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            heart.innerHTML =
                ["❤️", "💖", "💕", "✨", "💗"][
                    Math.floor(
                        Math.random() * 5
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 40);

    }

}

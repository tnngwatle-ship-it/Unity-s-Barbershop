
/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



/* =========================
   BOOKING FORM WHATSAPP
========================= */

function bookService(service) {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "27608060362";

    if (!name || !date || !time) {
        alert("Please fill in your name, date, and time.");
        return;
    }

    let text = "Hello Unity's Barbershop,\n\n";
    text += `Name: ${name}\n`;
    text += `Service: ${service}\n`;
    text += `Date: ${date}\n`;
    text += `Time: ${time}\n`;

    if (message) {
        text += `Notes: ${message}\n`;
    }

    text += "\nI will confirm the appointment via chat.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
}

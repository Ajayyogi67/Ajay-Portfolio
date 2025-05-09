const quotes = [
    "When something is important enough, you do it even if the odds are not in your favor. - <span class='highlight'>Elon Musk</span>",
    "The first step is to establish that something is possible; then probability will occur. - <span class='highlight'>Elon Musk</span>",
    "Innovation is not about money. It’s about creating value and solving problems. - <span class='highlight'>Sundar Pichai</span>",
    "Real change happens when you start with yourself. - <span class='highlight'>Sundar Pichai</span>",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. - <span class='highlight'>Bill Gates</span>",
    "Believe in yourself and your vision; self-mentorship is the key to success! - <span class='highlight'>Ajay Yogi</span>"
];

const roles = ["Founder & CEO", "AirACode", "AJJU INFRA Leader", "Visionary Entrepreneur"];
let currentQuoteIndex = 0;
let currentRoleIndex = 0;
let currentCertIndex = 0;

function typeRole() {
    const typingText = document.getElementById('typing-text');
    const role = roles[currentRoleIndex];
    let i = 0;
    typingText.textContent = '';
    const type = () => {
        if (i < role.length) {
            typingText.textContent += role.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeRole();
            }, 2000);
        }
    };
    type();
}

function changeQuote() {
    const quoteElement = document.getElementById('motivationalQuote');
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.innerHTML = quotes[currentQuoteIndex];
    quoteElement.classList.remove('active');
    void quoteElement.offsetWidth;
    quoteElement.classList.add('active');
}

function showCertificate(index) {
    const items = document.querySelectorAll('.certificate-item');
    items[currentCertIndex].classList.remove('active');
    currentCertIndex = index;
    items[currentCertIndex].classList.add('active');
}

function nextCertificate() {
    const items = document.querySelectorAll('.certificate-item');
    items[currentCertIndex].classList.remove('active');
    currentCertIndex = (currentCertIndex + 1) % items.length;
    items[currentCertIndex].classList.add('active');
}

function prevCertificate() {
    const items = document.querySelectorAll('.certificate-item');
    items[currentCertIndex].classList.remove('active');
    currentCertIndex = (currentCertIndex - 1 + items.length) % items.length;
    items[currentCertIndex].classList.add('active');
}

function openLightbox(index) {
    const lightbox = document.getElementById('certificateLightbox');
    const lightboxCert = document.getElementById('lightboxCertificate');
    lightboxCert.src = document.querySelectorAll('.certificate-item embed')[index].src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('certificateLightbox').classList.remove('active');
}
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Message sent successfully!'); // Replace with actual form submission logic
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill all fields.');
    }
}

window.onload = function () {
    const quoteElement = document.getElementById('motivationalQuote');
    quoteElement.innerHTML = quotes[0];
    quoteElement.classList.add('active');
    typeRole();
    showCertificate(0);
    document.querySelectorAll('.certificate-pdf').forEach((pdf, index) => {
        pdf.addEventListener('click', () => openLightbox(index));
    });
};
// Function to show the overlay and default to login form
function showOverlay() {
    document.getElementById("overlay").classList.remove("hidden");
    showLogin(); // Show login by default
}

// Function to hide the overlay
function hideOverlay() {
    document.getElementById("overlay").classList.add("hidden");
}

// Function to show the login form and hide the signup form
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

// Function to show the signup form and hide the login form
function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

// Login form submission logic
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        alert(`Logging in with Username: ${username} and Password: ${password}`);
        hideOverlay();  // Close overlay on successful login
    } else {
        alert("Please fill in both fields.");
    }
});

// Signup form submission logic
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (username && email && password) {
        alert(`Signing up with Username: ${username}, Email: ${email}, and Password: ${password}`);
        hideOverlay();  // Close overlay on successful signup
    } else {
        alert("Please fill in all fields.");
    }
});

// Initialize Map
function initMap() {
    var map = L.map('map-container').setView([20.5937, 78.9629], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([27.1751, 78.0421]).addTo(map)
        .bindPopup('<b>Taj Mahal</b><br>Agra, India. A symbol of love and architectural beauty.');

    L.marker([28.6139, 77.2090]).addTo(map)
        .bindPopup('<b>Red Fort</b><br>New Delhi, India. A UNESCO World Heritage Site.');

    L.marker([26.3086, 75.6021]).addTo(map)
        .bindPopup('<b>Amer Fort</b><br>Jaipur, India. Known for its beautiful architecture.');

    L.marker([17.2667, 73.0227]).addTo(map)
        .bindPopup('<b>Gateway of India</b><br>Mumbai, India. A landmark for India\'s history.');
}

// Load Timeline data dynamically
function loadTimeline(site) {
    let timelineEmbed = document.getElementById("timeline-embed");

    let content = {
        "Taj Mahal": [
            { year: "1632", event: "Construction begins under Emperor Shah Jahan's order." },
            { year: "1653", event: "Construction completed, Taj Mahal opens to the public." },
            { year: "1983", event: "Taj Mahal is declared a UNESCO World Heritage Site." },
            { year: "2001", event: "Taj Mahal undergoes restoration and cleaning efforts." },
        ],
        "Red Fort": [
            { year: "1638", event: "Construction begins under Emperor Shah Jahan." },
            { year: "1648", event: "Red Fort is completed and inaugurated." },
            { year: "2007", event: "Red Fort is declared a UNESCO World Heritage Site." },
            { year: "2015", event: "Major restoration work to preserve the fort’s structure and heritage." },
        ],
        "Chittorgarh Fort": [
            { year: "7th Century", event: "Initial construction by the Mauryas." },
            { year: "1568", event: "Fort restored after a major attack." },
            { year: "2013", event: "Site undergoes restoration to repair war damage." },
        ],
        "Qutub Minar": [
            { year: "1193", event: "Construction begins under Qutb-ud-din Aibak." },
            { year: "1360", event: "The tower reaches its final height after successive additions." },
            { year: "2005", event: "Qutub Minar undergoes major restoration work." },
        ],
        "Gateway of India": [
            { year: "1911", event: "Foundation stone laid by the British government." },
            { year: "1924", event: "Gateway of India is completed." },
            { year: "2000", event: "Restoration work begins to preserve the structure." },
        ]
    };

    let timelineHTML = content[site].map(item => `
        <div class="timeline-event">
            <h4>${item.year}</h4>
            <p>${item.event}</p>
        </div>
    `).join("");

    timelineEmbed.innerHTML = timelineHTML;
}

// Initialize Map on page load
window.onload = initMap;

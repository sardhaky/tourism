// Initialize the map
const map = L.map('map-container').setView([20.5937, 78.9629], 5); // Centered on India

// Add a tile layer (map design)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// List of monuments with coordinates and links to local pages
const monuments = [
    {
        name: "Taj Mahal",
        coords: [27.1751, 78.0421],
        infoLink: "tajmahal.html"
    },
    {
        name: "Qutub Minar",
        coords: [28.5245, 77.1855],
        infoLink: "qutbminar.html"
    },
    {
        name: "Red Fort",
        coords: [28.6562, 77.2410],
        infoLink: "redfort.html"
    },
    {
        name: "Hawa Mahal",
        coords: [26.9239, 75.8267],
        infoLink: "hawamahal.html"
    },
    {
        name: "Gateway of India",
        coords: [18.9220, 72.8347],
        infoLink: "gatewayofindia.html"
    }
];

// Add each monument as a marker with a clickable popup
monuments.forEach(monument => {
    const marker = L.marker(monument.coords).addTo(map);
    marker.bindPopup(`
        <b>${monument.name}</b><br>
        <a href="${monument.infoLink}" target="_blank">Learn More</a>
    `);
});


mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 ,// starting zoom
});

console.log(listing.geometry.coordinates);

// Create a custom DOM element for the marker
const airbnbLogo = document.createElement('img');
airbnbLogo.src = '/images/airbnb.png'; // Or a local image
airbnbLogo.style.width = '40px';
airbnbLogo.style.height = '40px';
airbnbLogo.style.borderRadius = '50%'; // Optional: make it round
airbnbLogo.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)'; // Optional styling

const marker = new mapboxgl.Marker({element :airbnbLogo})
    .setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`))
    .addTo(map);
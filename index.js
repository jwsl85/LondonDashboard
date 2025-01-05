let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 51.50736618041992, lng: -0.1276291161775589 },
    zoom: 4,
  });
}

initMap();

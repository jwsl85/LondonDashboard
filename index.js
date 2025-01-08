// <script src="https://unpkg.com/@deck.gl/core@latest/dist.min.js"></script>
// <script src="https://unpkg.com/@deck.gl/google-maps@latest/dist.min.js"></script>
const TileLayer = deck.TileLayer;
const GoogleMapsOverlay = deck.GoogleMapsOverlay;

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 51.50736618041992, lng: -0.1276291161775589 },
    zoom: 4,
  });

  const apiKey = 'AlzaSyDTXnZvPceTcpvifeGsntZVY-UY5zu7LPKU';
  const heatmapType = 'GBR_DEFRA'
  const deckOverlay = new GoogleMapsOverlay({
    layers: [
      new TileLayer({
        id: 'heatmap-tiles',
        data: 'https://airquality.googleapis.com/v1/mapTypes/'+ heatmapType +'/heatmapTiles/{z}/{x}/{y}?key=' + apiKey,
      })
    ],
  });

  deckOverlay.setMap(map);
}

initMap();

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 51.50736618041992, lng: -0.1276291161775589 },
    zoom: 10,
  });

  const apiKey = 'AIzaSyDTXnZvPceTcpvifeGsntZVYUY5zu7LPKU';
  const heatmapType = 'GBR_DEFRA'
  const deckOverlay = new deck.GoogleMapsOverlay({
    layers: [
      new deck.TileLayer({
        id: 'heatmap-tiles',
        data: 'https://airquality.googleapis.com/v1/mapTypes/'+ heatmapType +'/heatmapTiles/{z}/{x}/{y}?key=' + apiKey,
      })
    ],
  });

  deckOverlay.setMap(map);
}

initMap();

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });
   let markerpos={
       position: new google.maps.LatLng(-28.024, 140.887),
       map:map
   }
  
  let marker = new google.maps.Marker(markerpos)
    }